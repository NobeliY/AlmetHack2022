<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'name',
        'preview',
        'description',
        'date',
        'time',
        'place',
        'price',
        'full_name',
        'organization_name',
        'phone',
    ];

    public  function admin()
    {
        $this->belongsTo(Admin::class);
    }
}
