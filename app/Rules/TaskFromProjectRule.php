<?php

namespace App\Rules;

use App\Project;
use Illuminate\Contracts\Validation\Rule;

class TaskFromProjectRule implements Rule
{
    public $project;

    /**
     * Create a new rule instance.
     *
     * @param Project $project
     */
    public function __construct(Project $project)
    {
        $this->project = $project;
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
        if ($this->project) {
            return $this->project->hasActiveTask($value);
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
        return 'Task is not from active tasks of this project.';
    }
}
