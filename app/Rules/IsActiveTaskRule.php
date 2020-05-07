<?php

namespace App\Rules;

use App\Task;
use Illuminate\Contracts\Validation\Rule;

class IsActiveTaskRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
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
        $task = Task::find($value);

        if ($task) {
            return in_array($task->status, [Task::STATUS_TODO, Task::STATUS_COMPLETED]);
        }
        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Task is not active.';
    }
}
