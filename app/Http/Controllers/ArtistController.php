<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Artist;
class ArtistController extends Controller
{
    public function index()
    {
        return Artist::all();
    }
 
    public function show($id)
    {
        return Artist::find($id);
    }

    public function store(Request $request)
    {
        $artist=new Artist();
        $artist->name=$request->name;
        $artist->stage_name=$request->stage_name;
        $artist->job=$request->job;
        //$us->birthday=date("Y/m/d"); // date now
        //$dt=mktime(00,00,00,12,21,2015);
        $artist->birthday=$request->birthday;
        $artist->save();
        return $artist;
    }

    public function update(Request $request, $id)
    {
        $artist = Artist::findOrFail($id);
        $artist->update($request->all());

        return $artist;
    }

    public function delete(Request $request, $id)
    {
        $artist = Artist::findOrFail($id);
        $artist->delete();

        return "delete ok";
    }
}
