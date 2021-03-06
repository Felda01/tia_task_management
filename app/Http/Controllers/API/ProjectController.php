<?php
namespace App\Http\Controllers\API;

use App\Client;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectAssignUserRequest;
use App\Http\Requests\ProjectManageTeamRequest;
use App\Http\Requests\ProjectStoreRequest;
use App\Http\Requests\ProjectUpdateRequest;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Project;
use App\Task;
use App\User;
use Illuminate\Http\Request;

/**
 * Class ProjectController
 * @package App\Http\Controllers\API
 */
class ProjectController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('project.show')->only(['show', 'roadmap', 'gantt']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProjectStoreRequest $request
     * @return ProjectResource
     */
    public function store(ProjectStoreRequest $request)
    {
        /** @var Project $project */
        $project = Project::create($request->only(['title', 'slug', 'start_date', 'end_date', 'client_id']));

        $project->users()->save($request->user());

        /** @var Client $client */
        $client = $project->client()->first();

        $project->users()->save($client->user()->first());

        $project->save();

        return new ProjectResource($project);
    }

    /**
     * Display the specified resource.
     *
     * @param Project $project
     * @return ProjectResource
     */
    public function show(Project $project)
    {
        return (new ProjectResource($project->load(['client', 'activeTasks.assignee', 'users', 'versions'])))->additional(['meta' => [
            'projectStatusOptions' => [
                ['text' => ucfirst(Project::STATUS_ACTIVE), 'value' => Project::STATUS_ACTIVE ],
                ['text' => ucfirst(Project::STATUS_CLOSED), 'value' =>Project::STATUS_CLOSED ],
                ['text' => ucfirst(Project::STATUS_FINISHED), 'value' => Project::STATUS_FINISHED ],
            ],
            'taskStatusOptions' => [
                ['text' => ucfirst(Task::STATUS_TODO), 'value' => Task::STATUS_TODO ],
                ['text' => ucfirst(Task::STATUS_IN_PROGRESS), 'value' => Task::STATUS_IN_PROGRESS ],
                ['text' => ucfirst(Task::STATUS_COMPLETED), 'value' => Task::STATUS_COMPLETED ],
            ],
            'taskPriorityOptions' => [
                ['text' => ucfirst(Task::PRIORITY_NONE), 'value' => Task::PRIORITY_NONE ],
                ['text' => ucfirst(Task::PRIORITY_LOW), 'value' => Task::PRIORITY_LOW ],
                ['text' => ucfirst(Task::PRIORITY_NORMAL), 'value' => Task::PRIORITY_NORMAL ],
                ['text' => ucfirst(Task::PRIORITY_HIGH), 'value' => Task::PRIORITY_HIGH ],
                ['text' => ucfirst(Task::PRIORITY_IMMEDIATE), 'value' => Task::PRIORITY_IMMEDIATE ],
            ],
            'allUsers' => new UserCollection(User::employee()->get())
        ]]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProjectUpdateRequest $request
     * @param Project $project
     * @return ProjectResource
     */
    public function update(ProjectUpdateRequest $request, Project $project)
    {
        $project->update($request->only(['title', 'start_date', 'end_date', 'status']));

        return new ProjectResource($project);
    }

    /**
     * @param Project $project
     * @return ProjectResource
     */
    public function roadmap(Project $project)
    {
        return new ProjectResource($project->load(['versions.tasks.assignee', 'tasksWithNoVersion']));
    }

    /**
     * @param Project $project
     * @return ProjectResource
     */
    public function gantt(Project $project)
    {
        return new ProjectResource($project->load(['activeTasks.dependencies']));
    }

    /**
     * @param ProjectAssignUserRequest $request
     * @param Project $project
     * @return UserCollection
     */
    public function assignUser(ProjectAssignUserRequest $request, Project $project)
    {
        $project->users()->attach($request->input(['user_id']));

        $project->save();

        return new UserCollection($project->users()->get());
    }
}
