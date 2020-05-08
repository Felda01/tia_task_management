<?php

namespace App\Http\Middleware;

use App\Client;
use App\User;
use Closure;
use Illuminate\Auth\Access\AuthorizationException;

class ClientShow
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /** @var User $user */
        $user = $request->user('api');

        /** @var Client $client */
        $client = $request->route('client');
        $clientUser = $client->user()->first();

        if ($user->isClient() && $clientUser->id !== $user->id) {
            throw new AuthorizationException;
        }

        return $next($request);
    }
}
