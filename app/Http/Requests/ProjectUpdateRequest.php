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
        $user = request()->user('api');
        return $user->isSenior();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        /** @var Project $project */
        $project = $this->route('project');

        return [
            'title' => 'required|string|max:255',
            'start_date' => ['required', 'date', 'before_or_equal:'.$project->min_start_date],
            'end_date' => ['required', 'date', 'after_or_equal:start_date', 'after_or_equal:'.$project->max_end_date],
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
