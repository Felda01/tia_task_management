<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\NotificationDestroyRequest;
use App\Http\Requests\NotificationStoreRequest;
use App\Http\Requests\NotificationUpdateRequest;
use App\Notification;
use Illuminate\Http\Request;

/**
 * Class NotificationController
 * @package App\Http\Controllers\API
 */
class NotificationController extends Controller
{
    /**
     * Remove the specified resource from storage.
     *
     * @param Notification $notification
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(Notification $notification)
    {
        $user = request()->user('api');
        if ($user->id === $notification->user->id) {
            $notification->delete();

            return response()->json(null, 204);
        }
        return response()->json([
            'status' => 'This action is unauthorized.'
        ], 403);
    }
}
