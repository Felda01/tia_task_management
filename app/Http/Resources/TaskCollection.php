<?php
namespace App\Http\Resources;

use App\Task;
use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class TaskCollection
 * @package App\Http\Resources
 */
class TaskCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->collection->transform(function (Task $task) {
            return (new TaskResource($task));
        });

        return [
            'data' => $this->collection
        ];
    }
}
