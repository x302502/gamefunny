<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Person;

class PersonController extends Controller
{
    //
    public function index()
    {
        $tt= Person::all();
        $arr=array();
        foreach($tt as $item){
            array_push($arr,base64_encode($item->picture));
        }
        // echo ' <img src="data:image/png;base64,'.$arr[0].'" />';
        return $arr;
    }
}
