function game7() {
    FB.api('/me/', {
        fields: 'id,name,picture'
    }, function (user) {
        // console.log(user);
        createNameJp(user.name);
    });
  }
function createNameJp(name){
    name=convertVietnamese(name);
    changeNameJp(name);
}
function changeNameJp(name){
    $.ajax({
        type: "GET",
        url: "./api/namejp",
        success: function (data) {
            name=name.toUpperCase();
           console.log(data);
        //    console.log(data.findIndex(x=>x.vi=='L '));
           nameJp="";
           for(i=0;i<name.length;i++){
                if(name[i]=='-') {
                    
                    nameJp+=' ';
                    continue;
                }
                index=data.findIndex(x=>x.vi.trim()==name[i].trim());
                console.log(index);
                nameJp+=data[index].jp.trim();
           }
           console.log(nameJp);
           $("#play-finish").html('<h1> Tên tiếng nhật của bạn là: <br>' +nameJp + '</h1>');
        }
    });
}
function convertVietnamese(str) { 
    str= str.toLowerCase();
    str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str= str.replace(/đ/g,"d"); 
    str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
    str= str.replace(/-+-/g,"-");
    str= str.replace(/^\-+|\-+$/g,""); 

    return str; 
}