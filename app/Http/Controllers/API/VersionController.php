<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\VersionStoreRequest;
use App\Http\Requests\VersionUpdateRequest;
use App\Http\Resources\VersionResource;
use App\Version;
use Illuminate\Http\Request;

/**
 * Class VersionController
 * @package App\Http\Controllers\API
 */
class VersionController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param VersionStoreRequest $request
     * @return VersionResource
     */
    public function store(VersionStoreRequest $request)
    {
        $version = Version::create($request->only(['title', 'end_date', 'project_id']));

        return new VersionResource($version);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param VersionUpdateRequest $request
     * @param Version $version
     * @return VersionResource
     */
    public function update(VersionUpdateRequest $request, Version $version)
    {
        $version->update($request->only(['title', 'end_date']));

        return new VersionResource($version);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Version $version
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Version $version)
    {
        $version->tasks()->update(['version_id' => null]);

        try {
            $version->delete();
        } catch (\Exception $e) {
            response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());
        }

        return response()->json('', 204);
    }
}
