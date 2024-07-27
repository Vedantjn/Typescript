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
    private readonly city: string = "Indore"
    constructor(
        public email: string, 
        public name: string
    ){
        this.email = email;
        this.name = name;
    }   
}

const vedant = new User("vedant@gmail.com", "vedantjn")
// vedant.city = "Indore"
vedant.email
// vedant.city