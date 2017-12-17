 @extends('layouts.master') @section('content')
<div class="col-md-8 col-m-12 menu">
	<div id="play-finish" class="play-finish" align="center">
		<h1 id="game-title">{{ $game->name}}</h1>

		<div>
			<img class="card-img-top" id="card-img-top" src="img/game/{{$game->picture}}" alt="Card image">
		</div>

		<div class="space10"></div>
		<button onclick="playGame({{$game->id}});" class="btn" role="button" style="background-color:#3B5998;width:60%">
			<img src="img/icon.png" alt="">
			<i style="font-weight:bold;color:white;"> Dự đoán kết quả</i>
		</button>
	</div>
	<div class="badge badge-pill badge-primary">Có thể bạn thích</div>
	<div class="row">

		<div class="col-md-4">
			<a href="#">
				<div class="card">
					<img class="card-img-top" src="img/sn.jpg" alt="Card image" style="width:100%">
					<div class="card-body">
						<p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
					</div>
				</div>
			</a>
		</div>

	</div>
</div>
<script src="js/process/fblogin.js"></script>
<script src="js/process/game1.js"></script>
<script src="js/process/game2.js"></script>
<script src="js/process/game6.js"></script>
<script src="js/process/game7.js"></script>
@endsection