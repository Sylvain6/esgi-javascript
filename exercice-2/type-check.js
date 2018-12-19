function type_check_v1(value, type){
    if(typeof(value) !== type){
        return false;
    }
    return true;
};

console.log(type_check_v1(1, "number"));