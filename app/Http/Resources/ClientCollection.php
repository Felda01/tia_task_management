<?php
namespace App\Http\Resources;

use App\Client;
use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class ClientCollection
 * @package App\Http\Resources
 */
class ClientCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->collection->transform(function (Client $client) {
            return (new ClientResource($client));
        });

        return [
            'data' => $this->collection
        ];
    }
}
