<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        if ($request->hasFile('logo')) {
//            $logo = $request->file('logo');
//
//            $imageName = md5($logo->getClientOriginalName() . time()) . "." . $logo->getClientOriginalExtension();
//
//            $logo->move(public_path('images'), $imageName);
//
//            $client->logo = $imageName;
//            $client->save();
//        }
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return void
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param User $user
     * @return void
     */
    public function update(Request $request, User $user)
    {
//        if ($request->hasFile('logo')) {
//            $logo = $request->file('logo');
//
//            if ($client->logo) {
//                $oldLogoPath = public_path('images/'.$client->logo);
//                if (File::exists($oldLogoPath)) {
//                    File::delete($oldLogoPath);
//                }
//            }
//
//            $imageName = md5($logo->getClientOriginalName() . time()) . "." . $logo->getClientOriginalExtension();
//
//            $logo->move(public_path('images'), $imageName);
//
//            $client->logo = $imageName;
//            $client->save();
//        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return void
     */
    public function destroy(User $user)
    {
        //
    }
}
