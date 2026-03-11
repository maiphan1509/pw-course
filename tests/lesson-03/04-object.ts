const car: { brand: string, model: string, year: number } = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(car.year);

const person: { name: string, address: { street: string, city: string, country: string } } = {
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
console.log(person.address.street);

const student: { name: string, grades: { math: number, english: number } } = {
    name: "Alice",
    grades: {
        math : 85,
        english : 78
    }
};
console.log(student.grades.math);

const settings : {volume: number, brightness: number} = {
    volume: 50,
    brightness: 70
};
settings.volume = 75;
console.log(settings.volume);

const bike : { color: string} = {
    color: "red"
};
console.log(bike.color);

const employee : { name: string, age?: number } = {
    name: "Bob",
    age: 30
};
delete employee.age;
console.log(employee.age);

const school : { classA: string[], classB: string[] } = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};
console.log(school);