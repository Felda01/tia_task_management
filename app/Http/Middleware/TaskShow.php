<?php

namespace App\Http\Middleware;

use App\Project;
use App\Task;
use App\User;
use Closure;
use Illuminate\Auth\Access\AuthorizationException;

class TaskShow
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

        /** @var Task $task */
        $task = $request->route('task');

        /** @var Project $project */
        $project = $task->project()->first();

        if ($user->isClient()) {
            $userClient = $user->client()->first();
            $projectClient = $project->client()->first();
            if ($userClient->id !== $projectClient->id) {
                throw new AuthorizationException;
            }
        } else if ($user->isJunior() && !$project->hasUser($user->id)) {
            throw new AuthorizationException;
        }

        return $next($request);
    }
}
