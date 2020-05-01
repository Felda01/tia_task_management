<?php
namespace App\Http\Requests;

use App\Project;
use App\Rules\UserFromProjectRule;
use App\Task;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class TaskStoreRequest
 * @package App\Http\Requests
 */
class TaskStoreRequest extends FormRequest
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
        $project = Project::find($this->request->get('project_id'));

        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'priority' => ['required', Rule::in([Task::PRIORITY_NONE, Task::PRIORITY_LOW, Task::PRIORITY_NORMAL, Task::PRIORITY_HIGH, Task::PRIORITY_IMMEDIATE])],
            'start_date' => 'required|date|after_or_equal:today',
            'end_date' => 'required|date|after:start_date',
            'project_id' => 'required|integer|exists:projects,id',
            'version_id' => 'nullable|exists:versions,id',
            'assignee_id' => ['nullable', 'exists:users,id', new UserFromProjectRule($project)]
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
            'start_date' => 'start date',
            'end_date' => 'end date',
            'project_id' => 'project',
            'version_id' => 'version',
            'assignee_id' => 'assignee'
        ];
    }
}
