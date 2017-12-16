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

function gameTest() {
    FB.api('/me/', {
        fields: 'name,photos'
    }, function (user) {
        // console.log(user);
        console.log(user);
  
    });
  }
