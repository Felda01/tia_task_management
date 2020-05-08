<?php
namespace App\Http\Requests;

use App\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        /** @var User $user */
        $user = User::find($this->route('user'))->first();

        $authUser = request()->user('api');

        return $user->id === $authUser->id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $user = $this->route('user');

        return [
            'email' => ['required', 'email', Rule::unique('users')->ignore($user)],
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'photo' => 'nullable|file|image|mimes:jpeg,jpg,png|max:4096'
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
