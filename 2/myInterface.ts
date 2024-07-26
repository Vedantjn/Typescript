interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string,
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

interface User{
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const vedant: Admin = {dbId: 22, email: "v@v.com", userId: 1122, role: "admin", githubToken: "fsdf34234", startTrial: ()=>{
    return "trial started"
},
getCoupon: (name: "vedaneiorglkm", off: 234) => {
    return 10
}
}

vedant.email = "s@s.com"
// vedant.dbId = 22


