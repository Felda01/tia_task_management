<?php
namespace App\Http\Requests;

use App\Rules\TimeTrackingMaxTimePerDay;
use App\Rules\TimeTrackingValidTimeRule;
use App\Task;
use App\TimeTracking;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class TimeTrackingStoreRequest
 * @package App\Http\Requests
 */
class TimeTrackingStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $task = Task::find($this->request->get('task_id'));

        $user = request()->user('api');

        return [
            'date' => 'required|date|after_or_equal:'.$task->start_date.'|before_or_equal:'.$task->end_date,
            'time' => ['required', 'min:'. TimeTracking::MINIMAL_UNIT, 'max:'.TimeTracking::MAX_PER_DAY, new TimeTrackingValidTimeRule(), new TimeTrackingMaxTimePerDay($this->request->get('date'), $user->id)],
            'task_id' => 'required|integer|exists:tasks,id',
        ];
    }
}
