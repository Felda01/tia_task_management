<?php
namespace App\Utilities;


use Illuminate\Http\Request;

/**
 * Class ProxyRequest
 * @package App\Utilities
 */
class ProxyRequest
{
    /**
     * @param string $email
     * @param string $password
     * @return mixed
     */
    public function grantPasswordToken(string $email, string $password)
    {
        $params = [
            'grant_type' => 'password',
            'username' => $email,
            'password' => $password,
        ];

        return $this->makePostRequest($params);
    }

    /**
     * @return mixed
     */
    public function refreshAccessToken()
    {
        $refreshToken = request()->cookie('refresh_token');

        abort_unless($refreshToken, 403, 'Your refresh token is expired.');

        $params = [
            'grant_type' => 'refresh_token',
            'refresh_token' => $refreshToken,
        ];

        return $this->makePostRequest($params);
    }

    /**
     * @param array $params
     * @return mixed
     */
    protected function makePostRequest(array $params)
    {
        $params = array_merge([
            'client_id' => config('services.passport.password_client_id'),
            'client_secret' => config('services.passport.password_client_secret'),
            'scope' => '*',
        ], $params);

        $proxy = Request::create('oauth/token', 'post', $params);

        $response = app()->handle($proxy);

        if (!$response->isSuccessful()) {
            abort($response);

        }
        $data = json_decode($response->getContent());

        $this->setHttpOnlyCookie($data->refresh_token);

        return $data;
    }

    /**
     * @param string $refreshToken
     */
    protected function setHttpOnlyCookie(string $refreshToken)
    {
        cookie()->queue(
            'refresh_token',
            $refreshToken,
            14400, // 10 days
            null,
            null,
            false,
            true // httponly
        );
    }
}
