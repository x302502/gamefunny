class MonthDay {
    constructor(month, day) {
        this.month = month;
        this.day = day;
    }
}
class myPair{
    constructor(key,value){
        this.key=key;
        this.value=value;
    }
}
// Facebook login with JavaScript SDK

// function fbLogin() {
//     FB.login(function (data) {
//         console.log(data.authResponse);
//         getData();
//     }, {scope: 'email,public_profile,user_friends,publish_actions,user_birthday'});
// }
function playGame(id) {
    FB.login(function (data) {
        console.log(data.authResponse);
        getGame(id);
    }, {scope: 'email,public_profile,user_friends,publish_actions,user_birthday,user_likes,read_custom_friendlists,user_photos'});
}
function getGame(id) {
    switch (id) {
      case 1:
        game1();
        break;
      case 6:
        game6();
      break;
      default:
          gameTest();
    }

}
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
function convertDateMDY(dt){
    from = dt.split("/");
    return new Date(from[2], from[0]-1, from[1]);
}
function pipeDateDMY(dt){
    res= dt.substring(8,10)+
        "-" + dt.substring(5,7)+
        "-" + dt.substring(0,4);
    return res;
}
function valueMonthDay(month,day){
    arr=[31,29,31,30,31,30,31,31,30,31,30,31];
    res=0;
    for(i=0;i<month;i++)
    {
        res+=arr[i];
    }
    res+=day;
    return res;
}
function binarySearch(arr,key){
    left=0;
    right=arr.length-1;
    while(left<=right){
        mid=parseInt((left +right)/2);

        if(arr[mid]<key){
            left=mid+1;
        }else{
            if(arr[mid]===key) {
                return mid;
            }
            right=mid-1;
        }
    }
    return -1;
}
function upperBound(arr,key){
    left=0;
    right=arr.length-1;
    while(left<=right){
        mid=parseInt((left +right)/2);
        if(arr[mid].value<key){
            left=mid+1;
        }
        else{
            while(arr[mid].value>=key){
                mid--;
            }
            if(mid===arr.length-1){
                return mid;
            }else{
                return mid+1;
            }
        }
    }
}
function lowerBound(arr,key){
    left=0;
    right=arr.length-1;
    while(left<=right){
        mid=parseInt((left +right)/2);
        if(arr[mid].value>key){
            right=mid-1;
        }
        else{
            while(arr[mid].value<=key){
                mid++;
            }
            if(mid===0){
                return mid;
            }else{
                return mid-1;
            }
        }
    }
}
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
            if(item.month===month){
              $("#play-finish").html("");
              $("#play-finish").attr('align', '');
              $("#play-finish").append('<h1>'+name+' sinh vào tháng '+month+ ': </h1>');
              $("#play-finish").append('<img style="width:30%;" src='+picture+'>');
              loadItemMonthOfBirth(item);
              return;
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
function gameTest() {
    FB.api('/me/', {
        fields: 'name,photos'
    }, function (user) {
        // console.log(user);
        console.log(user);
  
    });
  }
