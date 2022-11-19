// 类型[]定义单层数组
let arr1:number[] = [1,3,4]
let arr2:string[] = ['s','a'];
let arr_:any[] = ['s',123,true]
// []定义多层数组
let arr3:number[][] = [[1,2],[3],[4]]

// 泛型定义单层数组
let arr4:Array<string> = ['st','sf'];
let arr5:Array<string|number> = [12,'sf']
// 泛型定义多层数组
let arr6:Array<Array<number|string>> = [['123',123],[33],['fas']]

// 通过接口描述数组
interface AA {
    [index:number]:number
}

let arr7:AA= [1,2,3]
// argument类数组
function Arr(...args:any):void{
    console.log(arguments)
    let arr:IArguments = arguments;
}
Arr(1,4,5)//[Arguments] { '0': 1, '1': 4, '2': 5 }

// 其实ts给argument内置了
// interface IArguments {
//     [index: number]: any;
//     length: number;
//     callee: Function;
//     }