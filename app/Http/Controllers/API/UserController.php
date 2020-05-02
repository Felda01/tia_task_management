<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserStoreRequest;
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
        return new UserResource($user->load(['projects']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param User $user
     * @return void
     */
    public function update(Request $request, User $user)
    {
//        if ($request->hasFile('logo')) {
//            $logo = $request->file('logo');
//
//            if ($client->logo) {
//                $oldLogoPath = public_path('images/'.$client->logo);
//                if (File::exists($oldLogoPath)) {
//                    File::delete($oldLogoPath);
//                }
//            }
//
//            $imageName = md5($logo->getClientOriginalName() . time()) . "." . $logo->getClientOriginalExtension();
//
//            $logo->move(public_path('images'), $imageName);
//
//            $client->logo = $imageName;
//            $client->save();
//        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return void
     */
    public function destroy(User $user)
    {
        //
    }


    /**
     * @return UserResource
     */
    public function current()
    {
        return new UserResource(auth()->guard('api')->user());
    }
}
