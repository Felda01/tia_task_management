<?php
namespace App\Http\Controllers\API;

use App\Comment;
use App\Http\Controllers\Controller;
use App\Http\Requests\CommentStoreRequest;
use App\Http\Resources\CommentResource;
use App\Notification;
use App\Task;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;

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
     * @return CommentResource|\Illuminate\Http\JsonResponse
     */
    public function store(CommentStoreRequest $request)
    {
        $user = $request->user('api');

        try {
            $comment = DB::transaction(function () use ($request, $user) {
                $comment = Comment::create([
                    'message' => $request->input('message'),
                    'type' => $request->input('type'),
                    'task_id' => $request->input('task_id'),
                    'user_id' => $user->id,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);

                if (!$comment) {
                    throw new Exception('Something wrong, Try again later');
                }

                $task = Task::where('id', $request->input('task_id'))->first();

                if ($task->assignee()->exists()) {
                    $user = $task->assignee()->first();
                    $notification = Notification::create([
                        'message' => 'Comment added.',
                        'user_id' => $user->id,
                        'task_id' => $task->id,
                    ]);

                    if (!$notification) {
                        throw new Exception('Something wrong, Try again later');
                    }
                }

                return $comment;
            });
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage()
            ], 422);
        }

        return new CommentResource($comment->load(['user']));
    }
}
