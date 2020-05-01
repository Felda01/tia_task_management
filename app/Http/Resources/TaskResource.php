<?php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class TaskResource
 * @package App\Http\Resources
 */
class TaskResource extends JsonResource
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
            'description' => $this->description,
            'priority' => $this->priority,
            'status' => $this->status,
            'start_date' => $this->start_date->format('Y-m-d'),
            'end_date' => $this->end_date->format('Y-m-d'),
            'version' => $this->version ? new VersionResource($this->version) : null,
            'project' => new ProjectResource($this->project),
            'assignee' => new UserResource($this->assignee),
            'reporter' => new UserResource($this->reporter),
            'comments' => CommentResource::collection($this->whenLoaded('comments')),
            'timeTracking' => TimeTrackingResource::collection($this->whenLoaded('timeTrackings')),
        ];
    }
}
