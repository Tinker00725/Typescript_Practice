interface Iuser{
    name:string,
    age:number
}
//函数定义
function fn(user:Iuser):Iuser{
    //?为可选参数
    return user
}
fn({name:'T',age:123})
//abc 100

function fn2(name:string,age?:number):string{
    return name + age
}
fn2('as',123)



// // 函数重载1
// function fn(params1:string):void
// // 函数重载2
// function fn(params1:number,params2:number):void
// // 实现逻辑的执行函数
// function fn(params1:any,params2?:any):void{
//     console.log(params1)
//     console.log(params2)
// }
// fn('s')
// fn(1,2)
// fn(true,'fa')