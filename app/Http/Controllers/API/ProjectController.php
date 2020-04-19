<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectStoreRequest;
use App\Http\Requests\ProjectUpdateRequest;
use App\Http\Resources\ProjectResource;
use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param ProjectStoreRequest $request
     * @return ProjectResource
     */
    public function store(ProjectStoreRequest $request)
    {
        $project = Project::create($request->only(['title', 'slug', 'start_date', 'end_date', 'client_id']));

        $project->users()->save($request->user());

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
        return new ProjectResource($project->load(['client', 'versions.tasks', 'tasksWithNoVersion', 'users']));
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
        $project->update($request->only(['title', 'slug', 'start_date', 'end_date', 'status']));

        return new ProjectResource($project);
    }
}
