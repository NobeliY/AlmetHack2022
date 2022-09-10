<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admin>
 */
class AdminFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name,
            'login' => Str::random(),
            'password' => fake()->password,
            'fully_access' => 0,
            'remember_token' => Str::random(10),
            'api_token' => Str::random(64),
            'created_at' => now(),
        ];
    }
}
