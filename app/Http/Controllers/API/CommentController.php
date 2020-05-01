<?php
namespace App\Http\Controllers\API;

use App\Comment;
use App\Http\Controllers\Controller;
use App\Http\Requests\CommentStoreRequest;
use App\Http\Resources\CommentResource;
use Carbon\Carbon;

/**
 * Class CommentController
 * @package App\Http\Controllers\API
 */
class CommentController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param CommentStoreRequest $request
     * @return CommentResource
     */
    public function store(CommentStoreRequest $request)
    {
        $user = $request->user('api');

        $comment = Comment::create([
            'message' => $request->input('message'),
            'type' => $request->input('type'),
            'task_id' => $request->input('task_id'),
            'user_id' => $user->id,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        return new CommentResource($comment->load(['user']));
    }
}
