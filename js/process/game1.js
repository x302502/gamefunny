function game1() {
    FB.api('/me/', {
        fields: 'id,name,birthday,picture,address'
    }, function (user) {
        // console.log(user);
        dt=convertDateMDY(user.birthday);
        key=valueMonthDay(dt.getMonth(),dt.getDate());
        getArtists(key,user);
  
    });
  }
  
  function getArtists(key,user){
      $.ajax({
          type: "GET",
          url: "./api/artist",
          success: function (data) {
              list=[];
              data.forEach(item => {
                  // console.log(list);
                  dt=new Date(item.birthday);
                  resvalue=valueMonthDay(dt.getMonth(),dt.getDate());
                  res=new myPair(item.id,resvalue);
                  list.push(res);
  
              });
  
              list.sort(function (a,b){
                  return a.value-b.value;
              });
              console.log(list);
              temp1=lowerBound(list,key);
              temp2= upperBound(list,key);
              var result;
              if(list[temp1].value-key < list[temp2].value){
                  result=data[list[temp1].key];
              }
              else{
                  result=data[list[temp2].key];
              }
              $("#play-finish").html('<h3>Bạn sinh vào ngày gần giống '+result.job+' '+result.name+'</h3>'+
              '<div class="row"> ' +
              '<div class="col-md-6">'+
              ' <img src="img/artist/'+result.picture+'" class="circle" style="width:100%;height:300px;"> </div> '+
              '<div class="col-md-6">'+
              ' <img src="'+user.picture.data.url+'" class="circle" style="width:100%;height:300px;"> </div> '+
              ' </div>'+
              '<div class="space10"></div>');
              console.log(result);
          }
      });
  }