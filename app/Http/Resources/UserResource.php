<?php
namespace App\Http\Resources;

use App\User;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class UserResource
 * @package App\Http\Resources
 */
class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        /** @var User $user */
        $user = request()->user('api');

        return [
            'id' => $this->id,
            'fullName' => $this->first_name .' '. $this->last_name,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'photo' => $this->photo ? asset('images/'. $this->photo) : asset('images/no_photo.png'),
            'type' => $this->type,
            'projects' => ProjectResource::collection($this->whenLoaded('projects')),
            'client' => $this->when($user->isClient(), new ClientResource($this->client)),''
        ];
    }
}
