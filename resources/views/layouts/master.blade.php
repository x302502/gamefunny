<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>test BS-4</title>
  <base href="{{asset('')}}">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/mycss.css">
  <link rel="stylesheet" href="css/space.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/responsie.css">
  <!-- BỎ COL-4 VÀ COL-8 -->

  <script src="js/jquery.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/process/sdkface.js"></script>

  </script>

</head>
<body>
  @include('layouts.menu')

  <div class="space20"></div>
   <div class="container">
    <div class="row">
    @yield("content")
     
     
      
    <div class="space10"></div>
 

  </body>
  </html>
