<?php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class TimeTrackingResource
 * @package App\Http\Resources
 */
class TimeTrackingResource extends JsonResource
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
            'time' => $this->time,
            'date' => $this->date->format('Y-m-d'),
            'user' => new UserResource($this->user)
        ];
    }
}
