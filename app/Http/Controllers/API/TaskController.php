<?php
namespace App\Http\Controllers\API;

use App\Comment;
use App\Http\Controllers\Controller;
use App\Http\Requests\TaskDestroyDependencyRequest;
use App\Http\Requests\TaskStoreDependencyRequest;
use App\Http\Requests\TaskStoreRequest;
use App\Http\Requests\TaskUpdateRequest;
use App\Http\Resources\TaskCollection;
use App\Http\Resources\TaskResource;
use App\Task;
use App\User;
use Carbon\Carbon;

/**
 * Class TaskController
 * @package App\Http\Controllers\API
 */
class TaskController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('task.show')->only(['show']);
        $this->middleware('employees')->only(['index']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return TaskCollection
     */
    public function index()
    {
        /** @var User $user */
        $user = request()->user('api');

        return new TaskCollection($user->openAssigneeTasks()->with(['version', 'assignee', 'reporter', 'project'])->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param TaskStoreRequest $request
     * @return TaskResource
     */
    public function store(TaskStoreRequest $request)
    {
        $user = $request->user('api');

        $task = Task::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'priority' => $request->input('priority'),
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('end_date'),
            'project_id' => $request->input('project_id'),
            'reporter_id' => $user->id,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        return new TaskResource($task);
    }

    /**
     * Display the specified resource.
     *
     * @param Task $task
     * @return TaskResource
     */
    public function show(Task $task)
    {
        return (new TaskResource($task->load(['version', 'assignee', 'reporter', 'dependencies.pivot', 'comments', 'timeTrackings.user', 'project.users', 'project.versions', 'project.activeTasks', 'comments.user'])))->additional(['meta' => [
            'taskStatusOptions' => [
                [ 'text' => ucfirst(Task::STATUS_TODO), 'value' => Task::STATUS_TODO ],
                [ 'text' => ucfirst(Task::STATUS_IN_PROGRESS), 'value' => Task::STATUS_IN_PROGRESS ],
                [ 'text' => ucfirst(Task::STATUS_COMPLETED), 'value' => Task::STATUS_COMPLETED ],
            ],
            'taskPriorityOptions' => [
                [ 'text' => ucfirst(Task::PRIORITY_NONE), 'value' => Task::PRIORITY_NONE ],
                [ 'text' => ucfirst(Task::PRIORITY_LOW), 'value' => Task::PRIORITY_LOW ],
                [ 'text' => ucfirst(Task::PRIORITY_NORMAL), 'value' => Task::PRIORITY_NORMAL ],
                [ 'text' => ucfirst(Task::PRIORITY_HIGH), 'value' => Task::PRIORITY_HIGH ],
                [ 'text' => ucfirst(Task::PRIORITY_IMMEDIATE), 'value' => Task::PRIORITY_IMMEDIATE ],
            ],
            'commentTypeOptions' => [
                [ 'text' => ucfirst(Comment::TYPE_ALL), 'value' => Comment::TYPE_ALL ],
                [ 'text' => ucfirst(Comment::TYPE_INTERN), 'value' => Comment::TYPE_INTERN ],
            ],
            'taskDependenciesTypeOptions' => [
                [ 'text' => ucfirst(Task::DEPENDENCIES_FS), 'value' => Task::DEPENDENCIES_FS ],
                [ 'text' => ucfirst(Task::DEPENDENCIES_FF), 'value' => Task::DEPENDENCIES_FF ],
                [ 'text' => ucfirst(Task::DEPENDENCIES_SS), 'value' => Task::DEPENDENCIES_SS ],
                [ 'text' => ucfirst(Task::DEPENDENCIES_SF), 'value' => Task::DEPENDENCIES_SF ],
            ]
        ]]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param TaskUpdateRequest $request
     * @param Task $task
     * @return TaskResource
     */
    public function update(TaskUpdateRequest $request, Task $task)
    {
        $task->update($request->all());

        return new TaskResource($task->load(['version', 'assignee', 'reporter', 'dependencies', 'comments', 'timeTrackings', 'project.users', 'project.versions', 'project.activeTasks', 'comments.user']));
    }

    /**
     * @param TaskStoreDependencyRequest $request
     * @param Task $task
     * @return TaskResource
     */
    public function storeDependency(TaskStoreDependencyRequest $request, Task $task)
    {
        $task->dependencies()->attach($request->input('task_id'), ['type' => $request->input('type')]);
        $task->save();

        return new TaskResource($task->load(['version', 'assignee', 'reporter', 'dependencies', 'comments', 'timeTrackings', 'project.users', 'project.versions', 'project.activeTasks', 'comments.user']));
    }

    /**
     * @param TaskDestroyDependencyRequest $request
     * @param Task $task
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroyDependency(TaskDestroyDependencyRequest $request, Task $task)
    {
        $task->dependencies()->detach($request->input('task_id'));
        $task->save();

        return response()->json(null, 204);
    }
}
