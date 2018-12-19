const type_check_v1 = (value, type) => {
    if(typeof(value) !== type){
        return false;
    }
    return true;
};

const compareObject = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2)

function type_check_v2(value, args) {
    if(typeof value == "object"){
        if(compareObject(value, args.value)){
            return type_check_v1(value, args.type);
        }
    }else if(value == args.value){
        return type_check_v1(value, args.type);
    }
    return false;
}
