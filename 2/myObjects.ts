// const User = {
//     name: "Vedant",
//     email: "vedant@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: "vedant", isPaid: false, email: "h@h.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name:"reactJS", price: 399}
// }

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User): User{
    return {name: "", email: "", isActive: true}
}

createUser({name: "", email: "", isActive: true})





export {}