<?php
namespace App\Http\Controllers\API;

use App\Client;
use App\Http\Controllers\Controller;
use App\Http\Requests\ClientIndexRequest;
use App\Http\Requests\ClientStoreRequest;
use App\Http\Requests\ClientUpdateRequest;
use App\Http\Resources\ClientCollection;
use App\Http\Resources\ClientResource;
use App\User;
use Exception;
use Illuminate\Auth\Passwords\PasswordBroker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

/**
 * Class ClientController
 * @package App\Http\Controllers\API
 */
class ClientController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('employees')->only(['index']);
        $this->middleware('client.show')->only(['show']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return ClientCollection
     */
    public function index()
    {
        return (new ClientCollection(Client::with(['user', 'activeProjects'])->get()))->additional(['meta' => [
            'clientTypeOptions' => [
                ['text' => Client::TYPE_A, 'value' => Client::TYPE_A ],
                ['text' => Client::TYPE_B, 'value' => Client::TYPE_B ],
                ['text' => Client::TYPE_C, 'value' => Client::TYPE_C ],
            ]
        ]]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ClientStoreRequest $request
     * @return ClientResource|\Illuminate\Http\JsonResponse
     */
    public function store(ClientStoreRequest $request)
    {
        try {
            $client = DB::transaction(function () use ($request) {
                $user = User::create([
                    'email' => $request->input('email'),
                    'first_name' => $request->input('first_name'),
                    'last_name' => $request->input('last_name'),
                    'type' => User::TYPE_CLIENT,
                    'password' => Str::random(30)
                ]);

                if (!$user) {
                    throw new Exception('Something wrong, Try again later');
                }

                $client = Client::create([
                    'name' => $request->input('name'),
                    'type' => $request->input('type'),
                    'user_id' => $user->id
                ]);

                /** @var PasswordBroker $broker */
                $broker = Password::broker();

                $response = $broker->sendResetLink($request->only('email'));

                if ($response !== Password::RESET_LINK_SENT) {
                    throw new Exception($response);
                }

                if (!$client) {
                    throw new Exception('Something wrong, Try again later');
                }

                return $client;
            });
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ], 422);
        }

        return new ClientResource($client->load(['user']));
    }

    /**
     * Display the specified resource.
     *
     * @param Client $client
     * @return ClientResource
     */
    public function show(Client $client)
    {
        return (new ClientResource($client->load(['user', 'activeProjects'])))->additional(['meta' => [
            'clientTypeOptions' => [
                ['text' => Client::TYPE_A, 'value' => Client::TYPE_A ],
                ['text' => Client::TYPE_B, 'value' => Client::TYPE_B ],
                ['text' => Client::TYPE_C, 'value' => Client::TYPE_C ],
            ]
        ]]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ClientUpdateRequest $request
     * @param Client $client
     * @return ClientResource
     */
    public function update(ClientUpdateRequest $request, Client $client)
    {
        $client->update($request->only(['name', 'type']));

        return new ClientResource($client->load(['user']));
    }
}
