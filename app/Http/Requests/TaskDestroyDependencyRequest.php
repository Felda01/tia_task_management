<?php

namespace App\Http\Requests;

use App\Rules\TaskFromDependenciesRule;
use App\Rules\TaskFromProjectRule;
use App\Task;
use Illuminate\Foundation\Http\FormRequest;

class TaskDestroyDependencyRequest extends FormRequest
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
            'task_id' => ['required', 'integer', 'exists:tasks,id', new TaskFromProjectRule($task->project), new TaskFromDependenciesRule($task)]
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
