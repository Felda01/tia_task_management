<?php

namespace App\Http\Requests;

use App\Rules\IsActiveTaskRule;
use App\Rules\TaskFromProjectRule;
use App\Task;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TaskStoreDependencyRequest extends FormRequest
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
        /** @var Task $task */
        $task = $this->route('task');

        return [
            'task_id' => ['required', 'integer', 'exists:tasks,id', new IsActiveTaskRule(), new TaskFromProjectRule($task->project)],
            'type' => ['required', 'string', Rule::in(Task::DEPENDENCIES_FS, Task::DEPENDENCIES_FF, Task::DEPENDENCIES_SF, Task::DEPENDENCIES_SS)],
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
