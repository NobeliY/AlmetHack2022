<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('name');
            $table->string('preview');
            $table->text('description');

            $table->date('date');
            $table->time('time');
//            $table->dateTime('datetime');
            $table->string('place');
            $table->string('price');
            $table->string('full_name');
            $table->string('organization_name');
            $table->string('phone');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applications');
    }
};
