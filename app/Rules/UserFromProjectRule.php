<?php
namespace App\Rules;

use App\Project;
use Illuminate\Contracts\Validation\Rule;

/**
 * Class UserFromProjectRule
 * @package App\Rules
 */
class UserFromProjectRule implements Rule
{
    /**
     * @var Project
     */
    public $project;

    /**
     * Create a new rule instance.
     *
     * @param $project Project
     */
    public function __construct($project)
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
            return $this->project->hasUser($value);
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
        return 'User is not from this project';
    }
}
