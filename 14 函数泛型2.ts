// 泛型
function id<Type>(value:Type):Type{return value};//普通函数声明式
// 使用<>指定类型变量，Type是类型变量的形参，
//由使用的时候定义类型变量具体的值，可以让函数传入不同的参数
const num14:number = id<number>(10);
const str14:string = id<string>('123');

let id2 = function<Type>(value:Type):Type{
    return value;
}//普通函数函数表达式

let id3 = <Type>(value:Type):Type=>value//箭头函数函数表达式

//1.指定更加具体的类型
function showId<Type>(value:Type[]):Type[]{
    console.log(value.length)
    return value
}
//2.添加约束extends关键字
interface IA14{
    length:number
}
// extends之后的Type可以解读为：要拥有length属性的一个值
function showId2<Type extends IA14>(value:Type):Type{
    console.log(value.length)//因为传入的value符合接口IA14的限制，拥有length属性，所以可以使用
    return value
}
showId2('str')//如果传入的这个值不只length属性也没关系，因为interface传参的时候只检测自己的规则，多了不管

let objg:IA14 = {
    length:12,
    name:'Tinker'
}

// 多个类型变量的泛型
function getKey<Type,Key extends keyof Type>(value:Type,key:Key){
    return value[key]
}//意思就是第二个参数必须传入第一个参数的key
let person = {name:'Tinker'};
getKey(person,'name')
getKey(18,'toFixed')//可以访问到对应的包装类型的属性与方法