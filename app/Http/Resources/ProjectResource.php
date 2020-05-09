<?php
namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class ProjectResource
 * @package App\Http\Resources
 */
class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'start_date' => $this->start_date->format('Y-m-d'),
            'min_start_date' => $this->min_start_date->format('Y-m-d'),
            'end_date' => $this->end_date->format('Y-m-d'),
            'max_end_date' => $this->max_end_date->format('Y-m-d'),
            'slug' => $this->slug,
            'status' => $this->status,
            'client' => new ClientResource($this->whenLoaded('client')),
            'versions' => VersionResource::collection($this->whenLoaded('versions')),
            'tasks' => TaskResource::collection($this->whenLoaded('activeTasks')),
            'users' => UserResource::collection($this->whenLoaded('users')),
            'tasks_no_version' => TaskResource::collection($this->whenLoaded('tasksWithNoVersion')),
        ];
    }
}
