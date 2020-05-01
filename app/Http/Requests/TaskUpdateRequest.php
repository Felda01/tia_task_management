<?php
namespace App\Http\Requests;

use App\Rules\OldDateOrAfterEqualRule;
use App\Rules\UserFromProjectRule;
use App\Task;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class TaskUpdateRequest
 * @package App\Http\Requests
 */
class TaskUpdateRequest extends FormRequest
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
        $task = $this->route('task');

        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'priority' => ['required', Rule::in([Task::PRIORITY_NONE, Task::PRIORITY_LOW, Task::PRIORITY_NORMAL, Task::PRIORITY_HIGH, Task::PRIORITY_IMMEDIATE])],
            'start_date' => ['required', 'date', new OldDateOrAfterEqualRule($task->start_date, Carbon::today(), 'today')],
            'end_date' => ['required', 'date', new OldDateOrAfterEqualRule($task->end_date, $task->start_date, 'start date')],
            'project_id' => 'required|integer|exists:projects,id',
            'status' => ['required', Rule::in(Task::STATUS_TODO, Task::STATUS_IN_PROGRESS, Task::STATUS_COMPLETED)],
            'version_id' => 'nullable|exists:versions,id',
            'assignee_id' => ['nullable', 'exists:users,id', new UserFromProjectRule($task->project)]
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
