const text:string = "hello"

const num:number = 2
const float:number = 2.5

let flag:boolean = false

const numbers:number[] = [1, 2, 3, 4]

const numbers2:Array<any> = [1,2,3]

// flag = 'text'
flag = true

//num()
text.length

// numbers.push('hello')
numbers2.push('hello')
console.log(numbers2)
numbers.length

function sayHello():void {
  console.log('hello')
}

function pow(num1:number, num2:number):number {
  return num1 * num2 
}

pow(1,3)
// pow()
// pow(1, 'sdfsd')
// pow(1, null)

const object:object = {}

const object2:object = {
  a: 1,
  b: 2
}