<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Game;
class HomeController extends Controller
{
    public function index(){
        $listGame=Game::all();
        return view('pages.home',compact('listGame'));
    }
    public function getDetail($id){
        $game=Game::find($id);
        // echo ($game);
        return view('pages.game',compact('game'));
    }
}
