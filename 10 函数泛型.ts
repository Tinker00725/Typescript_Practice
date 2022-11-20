// 泛型
function getArr<T>(params1:T,params2:T):Array<T>{
    return [params1,params2]
}
//意思就是传入的参数类型不限，返回存储该类型的对应数组

getArr<string>('aaa','bbb')//手动写上传入参数的类型
getArr(1,2)//ts的类型推断

// 多个泛型
function getArr2<T,U>(params1:T,params2:U):Array<T|U>{
    return [params1,params2]
}
getArr2('ste',123)//通过多个泛型，可以约定多种类型的参数传递

// 泛型约束1
interface Ilimit{//该接口限制传入参数的类型
    length:number
}
// 通过extends关键字限制传入参数的类型
function getArrLength<T extends Ilimit>(params1:T):number{
    return params1.length
}
// getArrLength(true)//boolean类型自身没有length属性，所以不能使用该函数
getArrLength([1,2,3])//number[]类型拥有length属性，所以可以使用该函数

// 泛型约束2
function getValue<T,K extends keyof T>(obj:T,key:K){
    // keyof获取T类型的所有键（T为对象类型），并且这些间以联合类型存在
    //然后使用extends关键字对K类型进行泛型约束，也就是约束第二个参数只能选obj的键里面的参数
    return obj[key]
}
let o = {a:1,b:2}
getValue(o,'a')