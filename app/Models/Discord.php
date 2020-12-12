<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discord extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'username',
        'avatar_url',
    ];

    public function user(){
        return $this->hasOne(User::class);
    }
}
