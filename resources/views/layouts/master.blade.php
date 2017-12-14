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
      <div class="col-md-8 col-m-12 menu">

        @yield("content")
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
      <div class="col-md-4">
        <div>
            <a href="#">
                <div class="card">
                  <img class="card-img-top" src="img/sn.jpg" alt="Card image" style="width:100%">
                  <div class="card-body">
                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                  </div>
                </div>
              </a>
        </div>
        <div>
            <a href="#">
                <div class="card">
                  <img class="card-img-top" src="img/sn.jpg" alt="Card image" style="width:100%">
                  <div class="card-body">
                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                  </div>
                </div>
              </a>
        </div>
        <div>
            <a href="#">
                <div class="card">
                  <img class="card-img-top" src="img/sn.jpg" alt="Card image" style="width:100%">
                  <div class="card-body">
                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                  </div>
                </div>
              </a>
        </div>
        <div>
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
      
    <div class="space10"></div>
 

  </body>
  </html>
