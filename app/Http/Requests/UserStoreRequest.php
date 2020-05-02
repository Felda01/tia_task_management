<?php

namespace App\Http\Requests;

use App\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserStoreRequest extends FormRequest
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
        return [
            'email' => 'required|unique:users|email',
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'type' => ['required', 'string', Rule::in(User::TYPE_SENIOR, User::TYPE_JUNIOR)],
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
            'type' => 'position',
            'first_name' => 'first name',
            'last_name' => 'last name',
        ];
    }
}
