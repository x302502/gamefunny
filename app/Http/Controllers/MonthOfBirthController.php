<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MonthOfBirth;
class MonthOfBirthController extends Controller
{
  public function index()
  {
      return MonthOfBirth::all();
  }

  public function show($id)
  {
      return MonthOfBirth::find($id);
  }

  public function store(Request $request)
  {
      $mob=new MonthOfBirth();
      $mob->month=$request->month;
      $mob->genitive=$request->genitive;
      $mob->job=$request->iob;
      $mob->love=$request->love;
      $mob->save();
      return $mob;
  }

  public function update(Request $request, $id)
  {
      $mob = MonthOfBirth::findOrFail($id);
      $mob->update($request->all());

      return $mob;
  }

  public function delete(Request $request, $id)
  {
      $mob = MonthOfBirth::findOrFail($id);
      $mob->delete();
      return "delete ok";
  }
}
