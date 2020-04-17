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
        factory(\App\User::class, 1)->create()->each(function ($user) {
            Client::create([
                "user_id" => $user->id,
                "secret" => Str::random(40),
                "name" => "Password Grant",
                "revoked" => 0,
                "password_client" => 1,
                "personal_access_client" => 0,
                "redirect" => "https://task-management.ddev.site",
            ]);
        });
    }
}
