// 对象的类型兼容性 多的可以赋值给少的
//因为结构化类型系统只识别长相是否一致（即内置属性，多的属性不检查）
interface Named{
    name:string
}
let x:Named;
let y = {name:'Tinker',age:13};
let c ={age:12,name:'123'}
x=y;
console.log(x)

// 接口之间的类型兼容性同对象

//函数兼容性
// type F1 = (a:number)=>void
// type F2 = (a:number,b:string)=>void
// //使用类型别名函数定义类型
// let f1:F1;
// let f2:F2;

// f1 = f2;//多赋少不行
// f2 = f1;//少赋多可以
// interface F1 {
//     x:number,
//     y:string
// }
// interface F2{
//     x:number,
//     y:string,
//     z:boolean
// }

// type F11 = (a:F1) => void;
// type F22 = (a:F2) => void;

// let f1:F11;
// let f2:F22;
// f2 = f1;
// f1 = f2;//a是函数中的一个变量，限制条件多的可以赋值给限制条件少的，以此来满足少条件的检查。

// 返回值的探究
type F1 = ()=>{name:string}
type F2 = ()=>{name:string,age:number};

let f1:F1;
let f2:F2;
f1 = f2;//f2返回值多于f1，满足f1返回值的检查
// f2 = f1//f1中的返回值太少，不满足f2返回值的检查
