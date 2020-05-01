<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\TimeTrackingStoreRequest;
use App\Http\Resources\TimeTrackingResource;
use App\TimeTracking;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TimeTrackingController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param TimeTrackingStoreRequest $request
     * @return TimeTrackingResource
     */
    public function store(TimeTrackingStoreRequest $request)
    {
        $user = $request->user('api');

        $timeTracking = TimeTracking::create([
            'date' => $request->input('date'),
            'time' => $request->input('time'),
            'task_id' => $request->input('task_id'),
            'user_id' => $user->id,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        return new TimeTrackingResource($timeTracking);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param TimeTracking $timeTracking
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(TimeTracking $timeTracking)
    {
        $user = request()->user('api');
        if ($user->id === $timeTracking->user->id) {
            $timeTracking->delete();

            return response()->json(null, 204);
        }
        return response()->json(null, 403);
    }
}
