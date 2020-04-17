<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ClientUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $client = $this->route('client');

        return [
            'name' => [
                'sometimes',
                Rule::unique('clients')->ignore($client),
                'max:255',
            ],
            'type' => 'sometimes'
        ];
    }
}
