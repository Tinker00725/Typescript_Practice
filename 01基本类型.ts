// 布尔值
let boolean:boolean = true;

// 数字
let num:number = 123;

// 字符串类型
let num2:string = 'str'
let str2:string = `${num2}你好`
let str3:string = '你好'+str2+"哈哈哈哈"; 

// 元组(已知数量和类型的数组)
let tuple:[string,number] = ['123',123]
let tuple2:[number,string] = [123,'abc']
console.log(tuple[0])//123

// 枚举(使用枚举类型可以为一组数值赋予友好的名字)
enum Color{red=1,blue=2,orange=3}
console.log(Color[1])//red 通过数值查找对应名称
console.log(Color.red)//1 通过名称查找对应数值
enum Color2{red,blue=123,orange}
console.log(Color2.red)//0 不指定默认从0开始 ||red(0) blue(123)，orange(124)
let a:Color = Color.red;
console.log('这是a：',a)


// console.log(obj.name)
//Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
//但是any类型定义的可以使用里面的方法
let obj2:any = {name:'T'};
obj2.name
let list:any[]=[1,'str',false]//可定义任意内容的数组

// Void 一个函数没有返回值，返回的就是void
let unusable:void = undefined;
let unusable2:void = null;
function fnVoid():void{
    // return 123 //不能给void赋值一个number类型
}

// null\undefined
let null2:null = null;
let undefine2:undefined = undefined;
let vo:void = null || undefined;
// let a3123:num = null;



// object
let create = function(o:object | null):void{}

