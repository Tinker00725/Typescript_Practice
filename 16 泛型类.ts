class Person16 <Type>{
    name:Type;
    sayHi:(value:Type)=>Type;
}

let p16 = new Person16<number>();
p16.name = 123;
p16.sayHi(123)

class Person16_2<Type>{
    value:Type;
    constructor(value:Type){
        this.value = value
    }
}
let p16_2 = new Person16_2(123)