interface AnyObject {
    [key:string]:number
}//使用[key:string]约束对象中的属性名称,js中对象的键都是string类型

let a = 123;
let obj18:AnyObject = {
    a:1
}//是用索引签名可以给对象增加n个属性

interface IArr18<Type>{//泛型接口
    [key:number]:Type
}
let arr18:IArr18<number> = [1,2,3,4]
// 使用索引类型可以给数组定义无限多个属性