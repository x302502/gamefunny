
@extends('layouts.master')
@section('content')
  <div id="play-finish" align="center">
    <h1>Ngày sinh của bạn giống người nổi tiếng nào nhất?</h1>
    
    <div>
      <img class="card-img-top" id="card-img-top" src="img/pt.jpg" alt="Card image">
    </div>
    
    <div class="space10"></div>
    <button onclick="fbLogin();"class="btn" role="button" style="background-color:#3B5998;width:60%">
      <img src="img/icon.png" alt="">
      <i style="font-weight:bold;color:white;"> Dự đoán kết quả</i>
    </button>
  </div>

  <script src="js/process/fblogin.js">

  </script>
@endsection
