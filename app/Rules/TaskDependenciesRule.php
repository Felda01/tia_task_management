<?php

namespace App\Rules;

use App\Task;
use Illuminate\Contracts\Validation\Rule;

class TaskDependenciesRule implements Rule
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
        $count = $this->task->dependencies()->count();
        if ($count > 0) {
            $dependencies = $this->task->dependencies;
            if ($value == Task::STATUS_IN_PROGRESS) {
                for ($i = 0; $i < $count; $i++) {
                    $dependency = $dependencies[$i];
                    if (($dependency->pivot->type == Task::DEPENDENCIES_FS && $dependency->status !== Task::STATUS_COMPLETED) || ($dependency->pivot->type == Task::DEPENDENCIES_SS && $dependency->status !== Task::STATUS_IN_PROGRESS)) {
                        return false;
                    }
                }
            } elseif ($value == Task::STATUS_COMPLETED) {
                for ($i = 0; $i < $count; $i++) {
                    $dependency = $dependencies[$i];
                    if (($dependency->pivot->type == Task::DEPENDENCIES_FF && $dependency->status !== Task::STATUS_COMPLETED) || ($dependency->pivot->type == Task::DEPENDENCIES_SF && $dependency->status !== Task::STATUS_IN_PROGRESS)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Task is in conflict with dependencies.';
    }
}
