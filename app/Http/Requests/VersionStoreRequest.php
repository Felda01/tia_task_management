<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VersionStoreRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'end_date' => 'required|date|after_or_equal:today',
            'project_id' => 'required|integer|exists:projects,id'
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
            'end_date' => 'end date',
        ];
    }
}
