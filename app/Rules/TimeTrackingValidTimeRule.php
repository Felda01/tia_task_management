<?php

namespace App\Rules;

use App\TimeTracking;
use Illuminate\Contracts\Validation\Rule;

class TimeTrackingValidTimeRule implements Rule
{

    /**
     * Create a new rule instance.
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
        return fmod($value, TimeTracking::MINIMAL_UNIT) == 0;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Minimal time unit is '. TimeTracking::MINIMAL_UNIT;
    }
}
