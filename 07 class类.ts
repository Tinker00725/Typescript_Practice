// // 定义类
// class Person {
//     //需要在Person身上定义好类型
//     public name:string;
//     private age:number;//只有内部可以访问
//     protected sex:string;//只有内部以及继承的子类可以访问
//     constructor(name:string,age:number,sex:string){
//         this.name = name;
//         this.age = age;
//         this.sex = sex
//     }
//     getAge(){
//         this.age//可以访问age
//     }
//     getSex(){
//         this.sex//可以访问到sex
//     }
// }

// let P = new Person('name',123,'man');
// P.age//外部不能访问age
// P.sex//外部访问不到

// class v extends Person{
//     constructor(){
//         super('张三',18,'man')
//     }
//     getSex(){
//         this.sex//可以获取到sex
//     }
// }

// class Person {
//     name:string;
//     static type:string;
//     constructor(name:string){
//         this.name = name;
//         this.type//这里访问不到静态属性
//     }
//     static sayHi():void{
//         console.log('hello')
//         this.type//因为这里的this指向的是Person可以访问
//     }
// }

// let p2 = new Person('Tinker');
// p2.sayHi();//实例访问不到sayHi静态方法
// Person.sayHi();//只有类自身可以使用静态方法
// Person.type//可以访问自身静态属性

interface IA7 {
    get(type:boolean):boolean;
    name:string
}
interface IB7 {
    set():void
}

class Man {
    sex:string
    constructor(sex:string){
        this.sex = sex;
    }
}

class Person extends Man implements IA7,IB7{
    name:string
    constructor(name:string){
        super('man');
        this.name = name;
    }
    get(type:boolean):boolean{
        return !!type
    };
    set(): void {
        
    }
}