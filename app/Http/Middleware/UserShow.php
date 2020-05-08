<?php

namespace App\Http\Middleware;

use App\User;
use Closure;
use Illuminate\Auth\Access\AuthorizationException;

class UserShow
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
        /** @var User $authUser */
        $authUser = $request->user('api');

        /** @var User $user */
        $user = $request->route('user');

        if ($authUser->isClient() && $authUser->id !== $user->id) {
            throw new AuthorizationException;
        }

        return $next($request);
    }
}
