// any 1.无法确定数据类型 2.类型发生变化
//Any (不清楚类型的变量而指定的一个类型，跳过编译阶段的检查)
let notSure:any = 1;
notSure = 'str';
notSure = 123;
notSure = null;
let obj:object = {name:'Tinker'};
let avb:string = notSure;

// unkown
let n:unknown = [{a:1,b:'s'}]
let n2:unknown = notSure;
let n3:unknown = {name:'Tinker'}
// n3.name

// // never 是任何类型的自己，可以赋值给任何类型，但是任何类型都不能赋值给never
// function fail(){
//     return new Error('somthing failed')
// }//返回值就是一个never