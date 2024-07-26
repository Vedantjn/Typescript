interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string,
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

const vedant: User = {dbId: 22, email: "v@v.com", userId: 1122, startTrial: ()=>{
    return "trial started"
},
getCoupon: (name: "vedaneiorglkm", off: 234) => {
    return 10
}
}

vedant.email = "s@s.com"
// vedant.dbId = 22