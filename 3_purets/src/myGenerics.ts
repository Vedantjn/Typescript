const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(3);
identityThree("3");
identityThree("Vedant");
identityThree(true);

function identityFour<T>(val: T): T {
    return val
}

interface Bottle{
    brand: string,
    type: number
}

// identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts1 = (products: number[]): number => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}

const getMoreSearchProducts2 = <T>(products: T[]): T => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}