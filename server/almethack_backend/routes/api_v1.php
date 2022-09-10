<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Event requests
Route::get("/events", [\App\Http\Controllers\Api\V1\EventController::class, "events"])->name("allevents");
Route::get('/events/get/{id}', [\App\Http\Controllers\Api\V1\EventController::class, "event", "id"])->name("found_event");

/*Admin requests
*static admin api_token: efO9LgnNCQCqwnHUp1Ik3yFdS7reRN5zqxoopyGkN2U8NNHsOPqBBe7y97G61BNU
*/
// Admin add, delete and authorization
Route::post('/admin/add', [\App\Http\Controllers\Api\V1\AdminController::class, "add_admin"])->name("add_administrator");
Route::post('/admin/delete', [\App\Http\Controllers\Api\V1\AdminController::class, "delete_admin"])->name("delete_administrator");
Route::post('/admin/auth', [\App\Http\Controllers\Api\V1\AdminController::class, "authorize_admin"])->name("authorization_admin");
//Application add, get, delete
Route::post('/admin/add/application', [\App\Http\Controllers\Api\V1\AdminController::class, "add_application"]);
Route::post('/admin/get/applications', [\App\Http\Controllers\Api\V1\AdminController::class, "get_all_application"])->name("get_all_applications_for_submitting");
Route::post('/admin/get/applications/{id}', [\App\Http\Controllers\Api\V1\AdminController::class, "get_application"])->name("get_application_with_id");
Route::post('/admin/delete/applications/{id}', [\App\Http\Controllers\Api\V1\AdminController::class, "delete_application"]);
// The application was sent correctly and approved
Route::post('/admin/add/events', [\App\Http\Controllers\Api\V1\EventController::class, "add_event"])->name("add_event");
