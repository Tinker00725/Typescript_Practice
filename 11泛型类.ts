// 通过泛型定义一个类
class Person3<T>{
    name:T;
    sayHi(params1:T):T[]{
        return [params1]
    }
}

let p213 = new Person3();
p213.name = '123123';
let Hi = p213.sayHi('str')
console.log(Hi,p213)
//[ 'str' ] Person3 { name: '123123' }