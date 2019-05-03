


function fill<T>(array: any[], value: T): T[] {
  return array.map(() => value)
}

const result = fill([1, 2, 3], "a")

const values = fill(["a", "b", "c"], 4)

function identity<T>(arg: T): T {
  return arg;
}

identity(1)