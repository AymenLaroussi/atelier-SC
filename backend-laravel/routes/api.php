<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Api\AtelierController;
use App\Http\Controllers\FormateurAtelierController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([
    'middleware' => 'api'
], function ($router) {

    /**
     * Authentication Module
     */
    Route::group(['prefix' => 'auth'], function() {
        Route::post('register', [AuthController::class, 'register']);
        Route::post('login', [AuthController::class, 'login']);
        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::get('me', [AuthController::class, 'me']);
    });



    Route::apiResource('ateliers', AtelierController::class);

    Route::post('ateliers/{atelier}/formateurs/{formateur}', [AtelierController::class, 'assignFormateur']);

    // Formateur Routes
    Route::group(['prefix' => 'formateur'], function () {
        // View ateliers they animate
        Route::get('ateliers', [FormateurAtelierController::class, 'index']);

        // View participants for their ateliers
        Route::get('ateliers/{atelier}/participants', [FormateurAtelierController::class, 'participants']);
    });





});

