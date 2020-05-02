<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class ProjectStoreRequest
 * @package App\Http\Requests
 *
 */
class ProjectStoreRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'slug' => 'required|min:6|max:50|string|unique:projects',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'client_id' => 'required|integer|exists:clients,id'
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
            'slug' => 'short code',
            'start_date' => 'start date',
            'end_date' => 'end date',
        ];
    }
}
