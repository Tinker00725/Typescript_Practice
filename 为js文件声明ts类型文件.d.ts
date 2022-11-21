import {count,songName,position,add,changDirection,fomartPoint} from 'xxxx'
//先引入js中需要类型声明的具体内容
declare let count:number;
declare let songName:number;
interface Piont{
    x:number;
    y:number;
}
declare let  position:Point;

declare function add(x:number,y:number):number

declare function changDirection(direction:'up'|'down'|'right'|'left'):void

declare const fomartPoint:(point:Piont)=>void
//类型声明文件函数中写具体实现形式是没有意义的

// 导出才能用,然后在js中导入（本文件与js文件同名）
export{count,songName,position,add,changDirection,fomartPoint}
