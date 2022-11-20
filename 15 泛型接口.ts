interface IdFunc<Type>{
    id:(value:Type)=>Type;
    name:Type[];
}

let obj15:IdFunc<number> = {
    id(value){
        return value
    },
    name:[1,2,3]
}