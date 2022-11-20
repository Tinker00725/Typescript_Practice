// interface B {
//     name:string,
//     age?:number,//可选类型
// }

// let p2:B = {
//     name:'Tinker',
// }

// 接口：限制对象属性的长度和类型
// interface A {
//     readonly name:string,//表示该属性只读，不可修改
//     age?:number,
//     sum():number,
//     [a:string]:any,//对象可以添加多个任意类型的键值对
// }

// let p:A = {
//     name:'Tinker',
//     age:13,
//     school:'CULR',
//     lover:'abc',
//     abc:123,
//     sum():number {
//         return 1+2
//     },
// }

// // 合并接口
// interface A {
//     name:string
// }
// interface B extends A {
//     age?:number,
//     school:string,
// }

// let p:B = {
//     name:'Tinker',
//     school:"CULR",
// }

// 接口和类型别名的区别
interface IPerson{
    name:string,
    age:number
}
type person = {
    name:string,
    age:number
}
let obj3123:IPerson = {
    name:'T',
    age:123,
}
//接口只能为对象指定类型
//类型别名可以给任意类型指定别名