// 类型推断就是没有明确定义一个变量的时候，ts会通过初始化类型推断这个变量的类型
let number = 'str'
// 类型别名
type a = number | string;
let arr:Array<a> = ['1',123]
function fn31():a{
    return 123
}
// 值得类型别名，就是只能是这几个值
type b = false | 'sd' | 123
let aaa:b = false;//aaa就只能取b里面的三个其中一个