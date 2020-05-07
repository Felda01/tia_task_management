<?php
namespace App;

use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Task
 * @package App
 */
class Task extends Model
{
    use EagerLoadPivotTrait;

    const STATUS_TODO = 'todo';
    const STATUS_IN_PROGRESS = 'in progress';
    const STATUS_COMPLETED = 'completed';

    const PRIORITY_NONE = 'none';
    const PRIORITY_LOW = 'low';
    const PRIORITY_NORMAL = 'normal';
    const PRIORITY_HIGH = 'high';
    const PRIORITY_IMMEDIATE = 'immediate';

    const DEPENDENCIES_FS = 'finish to start';
    const DEPENDENCIES_FF = 'finish to finish';
    const DEPENDENCIES_SS = 'start to start';
    const DEPENDENCIES_SF = 'start to finish';

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at', 'start_date', 'end_date'];


    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [''];

    /**
     * @return BelongsTo
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * @return BelongsTo
     */
    public function version()
    {
        return $this->belongsTo(Version::class);
    }

    /**
     * @return BelongsTo
     */
    public function assignee()
    {
        return $this->belongsTo(User::class, 'assignee_id');
    }

    /**
     * @return BelongsTo
     */
    public function reporter()
    {
        return $this->belongsTo(User::class, 'reporter_id');
    }

    /**
     * @return HasMany
     */
    public function timeTrackings()
    {
        return $this->hasMany(TimeTracking::class);
    }

    /**
     * @return HasMany
     */
    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    /**
     * @return HasMany
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function commentsForClient()
    {
        return $this->comments()->where('type', Comment::TYPE_ALL);
    }

    /**
     * @return BelongsToMany
     */
    public function dependencies()
    {
        return $this->belongsToMany(Task::class, 'task_dependencies', 'task_id', 'task_dependency_id')->withPivot('type');
    }

    /**
     * @param $task_id
     */
    public function hasDependency($task_id)
    {
        return $this->dependencies()->where('task_dependency_id', $task_id)->exists();
    }
}
