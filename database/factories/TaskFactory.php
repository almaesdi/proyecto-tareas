<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Task;
use App\User;
use Faker\Generator as Faker;

$factory->define(Task::class, function (Faker $faker) {
    $dateStart = $faker->dateTimeBetween('-10 days','+20 days')->format('Y-m-d H:i:s');

    return [
        'user_id'=> User::all()->random()->id,
        'title' => $faker->sentence(6),
        'description' => $faker->text,
        'startdate' =>$dateStart,
        'enddate' =>$faker->dateTimeBetween($dateStart,'+20 days')->format('Y-m-d H:i:s'),
        'pending' => $faker->boolean,
    ];
});
