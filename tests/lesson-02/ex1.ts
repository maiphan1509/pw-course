const number: number = 12;

// Cannot name "name" in TypeScript because it is a reserved word
let myName: string = "my number";

let isEven: boolean = false;

if (number % 2 === 0) {
    isEven = true;
}

console.log(`The number ${number} is even: ${isEven}`);