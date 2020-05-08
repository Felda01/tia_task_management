<?php
namespace App;

use App\Notifications\CustomResetPasswordNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

/**
 * Class User
 * @package App
 */
class User extends Authenticatable
{
    use SoftDeletes, Notifiable, HasApiTokens;

    const TYPE_CLIENT = 'client';
    const TYPE_SENIOR = 'senior';
    const TYPE_JUNIOR = 'junior';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password', 'type', 'photo'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * @return HasMany
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * @return HasMany
     */
    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    /**
     * @return BelongsToMany
     */
    public function projects()
    {
        return $this->belongsToMany(Project::class);
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
    public function assigneeTasks()
    {
        return $this->hasMany(Task::class, 'assignee_id');
    }


    /**
     * @return HasMany
     */
    public function openAssigneeTasks()
    {
        return $this->assigneeTasks()->whereIn('status', [Task::STATUS_TODO, Task::STATUS_IN_PROGRESS]);
    }


    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new CustomResetPasswordNotification($token));
    }

    /**
     * Scope a query to only include employees.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeEmployee($query)
    {
        return $query->whereIn('type', [self::TYPE_JUNIOR, self::TYPE_SENIOR]);
    }

    /**
     * @return bool
     */
    public function isSenior()
    {
        return $this->type === self::TYPE_SENIOR;
    }

    /**
     * @return bool
     */
    public function isClient()
    {
        return $this->type === self::TYPE_CLIENT;
    }

    /**
     * @return bool
     */
    public function isJunior()
    {
        return $this->type === self::TYPE_JUNIOR;
    }

    /**
     * @return HasOne
     */
    public function client()
    {
        return $this->hasOne(Client::class);
    }
}
