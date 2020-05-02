<?php
namespace App\Http\Requests;

use App\Comment;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class CommentStoreRequest
 * @package App\Http\Requests
 */
class CommentStoreRequest extends FormRequest
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
            'message' => 'required|string',
            'type' => ['required', 'string', Rule::in(Comment::TYPE_ALL, Comment::TYPE_INTERN)],
            'task_id' => 'required|integer|exists:tasks,id',
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
            'task_id' => 'task',
        ];
    }
}
