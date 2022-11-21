// Partial
interface IA17{
    name:string,
    age:number
}
// 类型别名可以是接口
type IA17_type = Partial<IA17>
let ia:IA17_type = {
    name:'Tiner'//不用写age，age变为可选了
}

// Readonly
type IA17_readonly = Readonly<IA17>;
let iar:IA17_readonly = {
    name:'Tinker',
    age:12
}
// iar.age = 123;

// Pick
interface IA17_2 {
    name:string,
    age:number,
    job:string,
    man:string,
    tight:boolean
}

type IA17_Pick = Pick<IA17_2,'name'|'age'|'man'>
let iap:IA17_Pick = {
    name:'T',
    age:12,
    man:'man'
}

// Record
type RecordObj = Record<'a'|'b'|'c',string>
let ro:RecordObj = {
    a:'s',
    b:'s',
    c:'s'
}