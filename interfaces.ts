interface ISquare  {
  height:number
  width:number
}

function squareRandomFactory():ISquare {
  const number = Math.ceil((Math.random() * 10))
  return {
    height: Math.random() * 1000,
    width: 10
  }
}

function sumSquares(sq1:ISquare, {width, height}:ISquare):ISquare {
  return {
    height: sq1.height + height,
    width: sq1.width + width,
  }
}


interface IUser {
  readonly id:number
  name:string
  lastName?:string
}

const user1:IUser = {
  id: 1,
  name: 'Bart',
  lastName: 'Simpsons'
}

const user2:IUser = {
  id:2,
  name: 'Lennie'
}

class User implements IUser {
  id
  name
  constructor(id:number, name:string) {
    this.id = id
    this.name = name
  }
}