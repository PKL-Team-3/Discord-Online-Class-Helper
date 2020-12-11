<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'type',
        'attachment',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
