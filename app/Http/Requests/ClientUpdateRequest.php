<?php
namespace App\Http\Requests;

use App\Client;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class ClientUpdateRequest
 * @package App\Http\Requests
 */
class ClientUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $user = request()->user('api');
        return $user->isSenior();
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
            'name' => ['required', 'string', Rule::unique('clients')->ignore($client), 'max:255'],
            'type' => ['required', 'string', Rule::in(Client::TYPE_A, Client::TYPE_B, Client::TYPE_C)],
        ];
    }
}
