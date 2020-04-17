<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
        return [
            'id' => $this->id,
            'fullName' => $this->first_name .' '. $this->last_name,
            'email' => $this->email,
            'photo' => $this->photo ? asset('images/'. $this->photo) : asset('images/no_photo.png')
        ];
    }
}
