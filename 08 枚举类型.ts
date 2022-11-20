// 接口枚举
enum Type{
    ddys,
    yyds = 'string',
}
interface IA8{
    num:Type.yyds//枚举可以用于定义接口类型与内容
}
let obj3213:IA8 = {
    num:Type.yyds
}

// const声明编译
const enum Color{
    red
}
let code:number = 0;
if(code === Color.red){

}

// 反向映射
enum List {
    a = 123,
}
// 将123赋给index
let index:number = List.a
// 通过List[123]查找到对应名称
let value = List[index]
console.log(index,value)//123,a