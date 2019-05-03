let tuple: [string, number];
// Initialize it
tuple = ["hello", 10]; // OK
// Initialize it incorrectly
// tuple = [10, "hello"]; // Error


enum WeekendDays  {
  friday,
  saturday,
  sunday
}

console.log(WeekendDays)
console.log(WeekendDays.friday)
console.log(WeekendDays[0])

function error(message: string): never {
  throw new Error(message);
}

let id:string|number|null = 'hello'

id = 1

id = null

// id = undefined

// id = false

type C = { a: string, b?: number }

const obj:C = {a: 'hello '}