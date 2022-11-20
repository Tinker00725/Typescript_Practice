interface A {
    fn:(value:string)=>string
}
// 使用继承同名方法会报错
interface B2 extends A{
    fn:(value:number)=>string
}
type C = A & B
// 此时value的类型定义为 string | number