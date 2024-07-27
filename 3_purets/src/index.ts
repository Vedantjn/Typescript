class User {
    email: string
    name: string
    city: string = ""
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

const vedant = new User("vedant@gmail.com", "vedantjn")
vedant.city = "Indore"