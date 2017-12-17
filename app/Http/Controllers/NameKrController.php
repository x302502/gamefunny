<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FirstNameKr;
use App\LastNameKr;
use App\MidNameKr;
use Response;
class NameKrController extends Controller
{
    public function getName($numYear,$numMonth,$numDay){
        $firstName =FirstNameKr::where('numyear',$numYear)->first();
        $midName =MidNameKr::where('nummonth',$numMonth)->first();
        $lastName =LastNameKr::where('numday',$numDay)->first();
        return Response::json(compact('firstName','midName','lastName'));
    }
}
