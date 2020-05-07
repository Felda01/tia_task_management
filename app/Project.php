<?php
namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Project
 * @package App
 */
class Project extends Model
{
    const STATUS_ACTIVE = 'active';
    const STATUS_FINISHED = 'finished';
    const STATUS_CLOSED = 'closed';

    const PRIORITY_NONE = 'none';
    const PRIORITY_LOW = 'low';
    const PRIORITY_NORMAL = 'normal';
    const PRIORITY_HIGH = 'high';
    const PRIORITY_IMMEDIATE = 'immediate';

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
    protected $guarded = ['maxEndDate', 'minStartDate'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['is_admin'];


    /**
     * @return BelongsTo
     */
    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    /**
     * @return HasMany
     */
    public function versions()
    {
        return $this->hasMany(Version::class);
    }

    /**
     * @return HasMany
     */
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    /**
     * @return Builder|HasMany
     */
    public function tasksWithNoVersion()
    {
        return $this->tasks()->doesntHave('version');
    }

    /**
     * @return HasMany
     */
    public function activeTasks()
    {
        return $this->tasks()->whereIn('status', [Task::STATUS_IN_PROGRESS, Task::STATUS_TODO]);
    }

    /**
     * @param $task_id
     * @return bool
     */
    public function hasActiveTask($task_id)
    {
        return $this->activeTasks()->where('id', $task_id)->exists();
    }

    /**
     * @return BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    /**
     * @param $user_id
     * @return bool
     */
    public function hasUser($user_id) {
        return $this->users()->where('user_id', $user_id)->exists();
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * @return mixed
     */
    public function getMaxEndDateAttribute()
    {
        return Carbon::parse($this->tasks()->max('end_date'));
    }

    /**
     * @return mixed
     */
    public function getMinStartDateAttribute()
    {
        return Carbon::parse($this->tasks()->min('start_date'));
    }
}
