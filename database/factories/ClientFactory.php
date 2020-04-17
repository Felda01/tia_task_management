<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Client;
use Faker\Generator as Faker;

$factory->define(Client::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->company,
        'type' => $faker->randomElement(['a', 'b', 'c']),
        'user_id' => \App\User::inRandomOrder()->first()->id
    ];
});
