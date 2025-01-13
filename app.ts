
let message: string = "блять как с тайпскриптом";


function add(x: number, y: number): number {
    return x + y;
}

console.log(message);
console.log(`2 + 3 = ${add(2, 3)}`);


interface User {
    name: string;
    age: number;
}


const user: User = {
    name: "глеб",
    age: 14
};

console.log(`Пользователь: ${user.name}, возраст: ${user.age}`);
