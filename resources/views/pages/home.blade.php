@extends('layouts.master')
@section('content')
@foreach ($listGame as $key)
	<div class="col-md-3">
		<a href="game/{{$key->id}}">
			<div class="card">
				<img class="card-img-top" src="img/game/{{$key->picture}}" alt="Card image" style="width:100%">
				<div class="card-body">
					<h4 class="card-text">{{$key->name}}</h4>
				</div>
			</div>
		</a>
	</div>
@endforeach

@endsection
