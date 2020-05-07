<?php

namespace App\Rules;

use App\Task;
use Illuminate\Contracts\Validation\Rule;

class TaskFromDependenciesRule implements Rule
{
    public $task;

    /**
     * Create a new rule instance.
     *
     * @param Task $task
     */
    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return $this->task->hasDependency($value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Task is not from dependencies of this task.';
    }
}
