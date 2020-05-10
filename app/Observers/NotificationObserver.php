<?php
namespace App\Observers;

use App\Events\NotificationCreatedEvent;
use App\Notification;

/**
 * Class NotificationObserver
 * @package App\Observers
 */
class NotificationObserver
{
    /**
     * Handle the notification "created" event.
     *
     * @param  \App\Notification  $notification
     * @return void
     */
    public function created(Notification $notification)
    {
        broadcast(new NotificationCreatedEvent($notification));
    }
}
