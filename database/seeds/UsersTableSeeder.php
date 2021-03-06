<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Passport\Client;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\User::class, 1)->create();

        Client::create([
            "user_id" => null,
            "secret" => env('PASSWORD_CLIENT_SECRET', 'UT5E7yC2ScSyZoHLs6nwtCbgzX5tr5W3tX4oJaDK'),
            "name" => "Password Grant",
            "revoked" => 0,
            "password_client" => env('PASSWORD_CLIENT_ID', 1),
            "personal_access_client" => 0,
            "redirect" => config('app.url'),
        ]);
    }
}
