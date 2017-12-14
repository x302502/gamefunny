<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }
 
    public function show($id)
    {
        return User::find($id);
    }

    public function store(Request $request)
    {
        $us=new User();
        $us->id_social=$request->id_social;
        $us->name=$request->name;
        $us->email=$request->email;
        $us->password=bcrypt("12345");
        //$us->birthday=date("Y/m/d"); // date now
        //$dt=mktime(00,00,00,12,21,2015);
        $us->birthday=$request->birthday;
        $us->save();
        return $us;
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    public function delete(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return "delete ok";
    }
}
