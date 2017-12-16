function cmp(a,b){
    if(a.lastname==b.lastname){
        if(a.firstname==b.firstname)
        {
            return 0;
        }
        else{
            if(a.firstname <b.firstname) return -1;
            return 1;
        }
    }
    else{
        if(a.lastname<b.lastname) return -1;
        return 1;
    }

}