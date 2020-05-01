<?php
namespace App\Rules;

use Carbon\Carbon;
use Illuminate\Contracts\Validation\Rule;

/**
 * Class OldDateOrAfterEqualRule
 * @package App\Rules
 */
class OldDateOrAfterEqualRule implements Rule
{
    public $date;
    public $oldValue;
    public $dateStringName;

    /**
     * Create a new rule instance.
     *
     * @param Carbon $oldValue
     * @param Carbon $date
     * @param string $dateStringName
     */
    public function __construct(Carbon $oldValue, Carbon $date, string $dateStringName)
    {
        $this->oldValue = $oldValue;
        $this->date = $date;
        $this->dateStringName = $dateStringName;
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
        $carbonValue = Carbon::parse($value);
        if ($carbonValue->equalTo($this->oldValue)) {
            return true;
        } else {
            return $carbonValue->gte(Carbon::today());
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute must be a date after or equal to '. $this->dateStringName .'.';
    }
}
