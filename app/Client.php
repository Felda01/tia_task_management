<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Client
 * @package App
 */
class Client extends Model
{
    const TYPE_A = 'A';
    const TYPE_B = 'B';
    const TYPE_C = 'C';

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [''];

    /**
     * @return HasMany
     */
    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    /**
     * @return HasMany
     */
    public function activeProjects()
    {
        $user = request()->user('api');

        return $this->projects()->where('status', Project::STATUS_ACTIVE)->whereHas('users', function($query) use ($user) {
            $query->where('user_id', $user->id);
        });
    }

    /**
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
