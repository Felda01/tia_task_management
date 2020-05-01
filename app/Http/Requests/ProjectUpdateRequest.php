<?php
namespace App\Http\Requests;

use App\Project;
use App\Rules\OldDateOrAfterEqualRule;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class ProjectUpdateRequest
 * @package App\Http\Requests
 */
class ProjectUpdateRequest extends FormRequest
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
        $project = $this->route('project');

        return [
            'title' => 'required|string|max:255',
            'start_date' => ['required', 'date', new OldDateOrAfterEqualRule($project->start_date, Carbon::today(), 'today')],
            'end_date' => ['required', 'date', new OldDateOrAfterEqualRule($project->end_date, $project->start_date, 'start date')],
            'status' => ['required', 'string', Rule::in([Project::STATUS_ACTIVE, Project::STATUS_FINISHED, Project::STATUS_CLOSED])],
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
            'slug' => 'short code',
            'start_date' => 'start date',
            'end_date' => 'end date',
        ];

    }
}
