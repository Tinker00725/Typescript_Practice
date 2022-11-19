// 联合类型
// 将数字转换为true/或接收到boolean直接输出
function fn(params:boolean | number):boolean{
    // 允许params多种传值类型
    return !!params
}

// 交叉类型
interface IA {
    name:string,
    age:number
}
interface IB {
    sex:string
}
// 将两个接口的条件合并
function fn2(params:IA & IB):string{
    return params.name + params.age + params.sex
}
fn2({name:'T',age:12,sex:'man'})

// 类型断言
// function fn3(params:number | string):void{
//     console.log((params as string).length)
// }
// fn3('123')//如果将‘123’→123,打印出的将会是undefined

interface IA6 {
    run:string
}
interface IB6{
    build:string
}

function fn3(params:IA6 | IB6):string{
    return (params as IA6).run
}
console.log(fn3({run:'aaa',build:'bbb'})) 