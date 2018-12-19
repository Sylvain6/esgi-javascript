const type_check_v1 = (value, type) => {
    if(typeof(value) !== type){
        return false;
    }
    return true;
};

function type_check_v2(val,args) {
    if(typeof val == "object"){
        if(compareObj(val,args.value)){
            return type_check_v1(val,args.type);
        }
    }else if(val == args.value){
        return type_check_v1(val,args.type);
    }
    return false;
}
