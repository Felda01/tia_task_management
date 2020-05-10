<?php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class VersionResource
 * @package App\Http\Resources
 */
class VersionResource extends JsonResource
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
            'end_date' => $this->end_date->format('Y-m-d'),
            'project' => new ProjectResource($this->project),
            'tasks' => TaskResource::collection($this->whenLoaded('tasks')),
        ];
    }
}
