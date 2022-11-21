type Choice = 'a'|'b'|'c';
type Choice2 = {[key in Choice]:number}
let ch:Choice2 = {
    a:1,
    b:2,
    c:3
}//key in Choice 表示Choice中的任意一个键(for(let key in Choice))

// in keyof 对象
type Props = {name:string,age:number,job:string};
type Props2 = {[key in keyof Props]:string};
let p18:Props2 = {
    name:"123",
    age:'123',
    job:'123'
}

// Partical的实现
type Partical<T> = {
    [p in keyof T]?:T[p]
}//T[p]取到的是相应的限制类型
// 这里用type实现了一个泛型类型别名，允许添加无限的属性并限制
// 查询多个
// T[keyof T] or T['a'|'b']