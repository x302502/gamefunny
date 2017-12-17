<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\NameJp;
class NameJpController extends Controller
{
    public function index()
    {
        $nameJps=NameJp::all();
        return $nameJps;
    }
}
