<?php
namespace App\Rules;

use App\TimeTracking;
use Illuminate\Contracts\Validation\Rule;

/**
 * Class TimeTrackingMaxTimePerDay
 * @package App\Rules
 */
class TimeTrackingMaxTimePerDay implements Rule
{
    public $date;
    public $userId;

    /**
     * Create a new rule instance.
     *
     * @param $date
     * @param $userId
     */
    public function __construct($date, $userId)
    {
        $this->date = $date;
        $this->userId = $userId;
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
        $sumPerDay = TimeTracking::where('date', $this->date)->where('user_id', $this->userId)->sum('time');

        return $sumPerDay + $value <= TimeTracking::MAX_PER_DAY;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Maximum hours per day is '.TimeTracking::MAX_PER_DAY;
    }
}
