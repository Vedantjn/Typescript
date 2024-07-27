"use strict";
// class User {
//     public email: string
//     // #name: string
//     private name: string
//     private readonly city: string = "Indore"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
// class User {
//     private readonly city: string = "Indore"
//     constructor(public email: string, public name: string){
//         this.email = email;
//         this.name = name;
//     }   
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Indore";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamil = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const vedant = new User("vedant@gmail.com", "vedantjn");
// vedant.city = "Indore"
vedant.email;
// vedant.city
// vedant.deleteToken
