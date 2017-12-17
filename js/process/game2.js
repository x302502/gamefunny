function game2() {
    FB.api('/me/', {
        fields: 'id,name,birthday,picture'
    }, function (user) {
        console.log(user);
        dt=convertDateMDY(user.birthday);
        createNameKr(dt.getFullYear().toString().substring(3,4),dt.getMonth()+1,dt.getDate());

    });
  }
  function createNameKr(year,month,day){
        $.ajax({
            type: "GET",
            url: "./api/namekr/"+year+"/"+month+"/"+day,
            success: function (data) {
                console.log(data.firstName);
                plHtml= $("#play-finish");
                plHtml.html("");
                plHtml.append('<h1>'+data.firstName.firstname +' '+
                                data.midName.midname + ' '+
                                data.lastName.lastname + '</h1>');
             
            }
        });
  }
  