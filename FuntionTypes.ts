export { }
function add(num1: number, num2?: number): number { // ? - Optional parameter
    if (num2) {
        return num1 + num2;
    }
    return num1;
}

// console.log('add function', add(3))
function addMore(num1: number, num2: number = 0): number { // ? - Default parameter
    return num1 + num2;
}

console.log('add more function', addMore(30,12))



function addMoreMore({ num1, num2 = 0 }: { num1: number, num2?: number }): number { // ? - Optional parameter
    return num1 + num2;
}

console.log('add function', addMoreMore({num1:1}))


interface Person {
    firstName:string,
    lastName?:string //oprional
}
function fullName({ firstName, lastName }: Person) {

    console.log(`His name is ${firstName} ${lastName}`)
}


let p = {
    firstName: 'Bruce',
    lastName: "Wayne"
}

fullName(p)