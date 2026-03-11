console.log('1. Function to calculate the area of a rectangle:');
let multiply = (a: number, b: number): number => {
    return a * b;
};

let result: number = multiply(5, 10);
let result2: number = multiply(3, 7);

console.log(`The result of multiplying 5 and 10 is: ${result}`);
console.log(`The result of multiplying 3 and 7 is: ${result2}`);
console.log('2. Function to find the minimum of three numbers:');
let findMin = (a: number, b: number, c: number): number => {
    return Math.min(a, b, c);
};

let minResult: number = findMin(5, 10, 3);
let minResult2: number = findMin(15, 7, 20);

console.log(`The minimum of 5, 10, and 3 is: ${minResult}`);
console.log(`The minimum of 15, 7, and 20 is: ${minResult2}`);

const students: {name: string, score: number}[] = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
    { name: 'David', score: 90 },
    { name: 'Eve', score: 88 }
];
console.log('All students:', students.map(student => student.name));

let threshold: number = 80;
let getTopStudents: string[] = students.filter(student => student.score >= threshold).map(student => student.name);
console.log(`3. The students with scores above ${threshold} are: ${getTopStudents.join(', ')}`);

let calculateInterest = (principal: number, rate: number, time: number): number => {
    return principal + ((principal * rate * time) / 100);
};

let interestResult: number = calculateInterest(1000, 5, 2);
console.log(`4. The total amount after calculating interest is: ${interestResult}`);