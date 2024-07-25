let score: number | string = 33

score = 44
score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let vedant: User | Admin = {name: "vedant", id: 334}

vedant = {username: "ved", id: 334}


// function getDbId(id: number | string){
//     // making some API calls
//     console.log('DB id is: ${id');
// }

getDbId(3)
getDbId("3")


function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase();
    } 
}

// Array

const data1: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number)[] = [1, "2", "3", 3, "4"]
const data4: (string | number | boolean)[] = [1, "2", "3", 3, "4", true, false]




let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "crew"