function addTwo(num: number): number{
    return num+2;
    // return "hi"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)
getUpper("4")
signUpUser("vedant", "vedant@gmail.com", true)
loginUser("vedant", "vedant@gmail.com") 

// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const heroes = ["thor", "spiderman", "ironman"]
// const heroes = [1, 2, 3]

heroes.map((hero): string => {
    return  `hero is ${hero}`
    // return 1;
})

function consoleError(errormsg: string): void{
    console.log(errormsg);
    // return 1;
}

function handleError(errormsg: string): never{
    // console.log(errormsg);
    // return 1;
    throw new Error(errormsg);
}





export {}