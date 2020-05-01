<?php
namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\User;
use App\Utilities\ProxyRequest;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

/**
 * Class AuthController
 * @package App\Http\Controllers
 */
class AuthController extends Controller
{
    use ThrottlesLogins;

    protected $proxy;

    public function __construct(ProxyRequest $proxy)
    {
        $this->proxy = $proxy;
    }

    /**
     * @param LoginRequest $request
     * @return \Illuminate\Http\JsonResponse|ValidationException
     * @throws ValidationException
     */
    public function login(LoginRequest $request)
    {
        $user = User::where($this->username(), $request->input($this->username()))->first();

        if (!$user || !Hash::check($request->input('password'), $user->password)) {

            $this->incrementLoginAttempts($request);

            throw ValidationException::withMessages([
                $this->username() => [trans('auth.failed')],
            ]);
        }

        $resp = $this->proxy->grantPasswordToken($request->input('email'), $request->input('password'));

        return response()->json([
            'token' => $resp->access_token,
            'expiresIn' => $resp->expires_in,
            'message' => 'You have been logged in',
        ], 200);
    }

    public function refreshToken()
    {
        $resp = $this->proxy->refreshAccessToken();

        return response([
            'token' => $resp->access_token,
            'expiresIn' => $resp->expires_in,
            'message' => 'Token has been refreshed.',
        ], 200);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse |\Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();

        cookie()->queue(cookie()->forget('refresh_token'));

        return response()->json([
            'message' => 'You have been successfully logged out',
        ], 200);
    }

    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function username()
    {
        return 'email';
    }
}
