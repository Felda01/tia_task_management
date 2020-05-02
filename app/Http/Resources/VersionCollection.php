<?php
namespace App\Http\Resources;

use App\Version;
use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class VersionCollection
 * @package App\Http\Resources
 */
class VersionCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->collection->transform(function (Version $version) {
            return (new VersionResource($version));
        });

        return [
            'data' => $this->collection
        ];
    }
}
