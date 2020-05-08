<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserDestroyRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdatePositionRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\User;
use Exception;
use Illuminate\Auth\Passwords\PasswordBroker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

/**
 * Class UserController
 * @package App\Http\Controllers\API
 */
class UserController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('employees')->only(['index']);
        $this->middleware('user.show')->only(['show']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return UserCollection
     */
    public function index()
    {
        return (new UserCollection(User::employee()->get()))->additional(['meta' => [
            'usersTypeOptions' => [
                ['text' => ucfirst(User::TYPE_JUNIOR), 'value' => User::TYPE_JUNIOR ],
                ['text' => ucfirst(User::TYPE_SENIOR), 'value' => User::TYPE_SENIOR ],
            ]
        ]]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return UserResource
     * @throws Exception
     */
    public function store(UserStoreRequest $request)
    {
        $user = User::create([
            'email' => $request->input('email'),
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'type' => $request->input('type'),
            'password' => Str::random(30)
        ]);

        /** @var PasswordBroker $broker */
        $broker = Password::broker();

        $response = $broker->sendResetLink($request->only('email'));

        if ($response !== Password::RESET_LINK_SENT) {
            throw new Exception($response);
        }

        return new UserResource($user);
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return UserResource
     */
    public function show(User $user)
    {
        return (new UserResource($user->load(['projects'])))->additional(['meta' => [
            'usersTypeOptions' => [
                ['text' => ucfirst(User::TYPE_JUNIOR), 'value' => User::TYPE_JUNIOR ],
                ['text' => ucfirst(User::TYPE_SENIOR), 'value' => User::TYPE_SENIOR ],
            ]
        ]]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param User $user
     * @return UserResource
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        $user->update($request->only(['email', 'first_name', 'last_name']));

        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');

            if ($user->photo) {
                $oldPhotoPath = public_path('images/'.$user->photo);
                if (File::exists($oldPhotoPath)) {
                    File::delete($oldPhotoPath);
                }
            }

            $imageName = md5($photo->getClientOriginalName() . time()) . "." . $photo->getClientOriginalExtension();

            $photo->move(public_path('images'), $imageName);

            $user->photo = $imageName;
            $user->save();
        }

        return new UserResource($user->load(['projects']));
    }

    /**
     * @param UserUpdatePositionRequest $request
     * @param User $user
     */
    public function updatePosition(UserUpdatePositionRequest $request, User $user)
    {
        $user->update($request->only(['type']));

        return new UserResource($user->load(['projects']));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param UserDestroyRequest $request
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(UserDestroyRequest $request, User $user)
    {
        try {
            $user->delete();
            return response()->json(null, 204);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage(), 400]);
        }
    }

    /**
     * @return UserResource
     */
    public function current()
    {
        return new UserResource(auth()->guard('api')->user());
    }
}
