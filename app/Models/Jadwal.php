<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'tanggal',
        'jam',
    ];

    public function user(){
        return $this->belongsTo(user::class);
    }

    
}
