<?php

namespace App\Http\Middleware;

use App\User;
use Closure;
use Illuminate\Auth\Access\AuthorizationException;

class OnlyEmployees
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     * @throws AuthorizationException
     */
    public function handle($request, Closure $next)
    {
        /** @var User $user */
        $user = $request->user('api');

        if ($user->isClient()) {
            throw new AuthorizationException;
        }

        return $next($request);
    }
}
