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

function fbLogin() {
    FB.login(function (data) {
        console.log(data.authResponse);
        getData();
    }, {scope: 'email,public_profile,user_friends,publish_actions,user_birthday'});
}
function getData() {
    FB.api('/me/', {
        fields: 'id,name,birthday,picture,address'
    }, function (user) {
        console.log(user);
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
            $("#play-finish").html('<h3>Bạn sinh vào ngày gần như '+result.job+' '+result.name+'</h3>'+
            '<div class="row"> ' +
            '<div class="col-md-6">'+
            ' <img src="img/'+result.picture+'" class="circle" style="width:100%;height:300px;"> </div> '+
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
// $.ajax({
//     type: "GET",
//     url: "./api/person",
//     success: function (data) {
//         // data.forEach(item => {
//         //     console.log(item);
//         // });
//         console.log(data[0]);
//     }
// });