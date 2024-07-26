// const user: (string | number)[] = ["hc", 1]

let tUser: [string, number, boolean]

// tUser = [true, "vedant", 131] 
tUser = ["vedant", 131, true]

// let rgb: [number, number, number] = [255, 123, 112, 0.5]
let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "vj.com"
newUser.push(true);






export {}