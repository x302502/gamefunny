function game6() {
    FB.api('/me/', {
        fields: 'id,name,birthday,picture'
    }, function (user) {
        console.log(user);
        dt=convertDateMDY(user.birthday);
        checkMonthOfBirth(user.name,user.picture.data.url,dt.getMonth()+1);
    });
  }
  function checkMonthOfBirth(name,picture,month){
      $.ajax({
        url: './api/monthofbirth',
        type: 'GET',
        success: function(data) {
          console.log(data);
          data.forEach(item => {
              if(item.month==month){
              //   alert("hehe");
                $("#play-finish").html("");
                $("#play-finish").attr('align', '');
                $("#play-finish").append('<h1>'+name+' sinh vào tháng '+month+ ': </h1>');
                $("#play-finish").append('<img style="width:30%;" src='+picture+'>');
                loadItemMonthOfBirth(item);
              }
          });
        }
      });
  }
  function loadItemMonthOfBirth(item) {
      $("#play-finish").append('<h3> <span style="color:red">Tính cách: </span>'+item.genitive+'</h3>');
      $("#play-finish").append('<h3> <span style="color:red">Công việc: </span>'+item.job+'</h3>');
      $("#play-finish").append('<h3> <span style="color:red">Tình yêu: </span>'+item.love+'</h3>');
  }