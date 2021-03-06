<?php
namespace App\Http\Requests;

use App\Client;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class ClientStoreRequest
 * @package App\Http\Requests
 */
class ClientStoreRequest extends FormRequest
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
        return [
            'name' => 'required|string|unique:clients|max:255',
            'type' => ['required', 'string', Rule::in(Client::TYPE_A, Client::TYPE_B, Client::TYPE_C)],
            'email' => 'required|string|email|unique:users,email',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return[
            'first_name' => 'first name',
            'last_name' => 'last name',
        ];
    }
}
