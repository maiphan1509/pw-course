import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nhập một số: ", (input) => {
    const number2: number = parseInt(input);

    if (number2 > 0) {
        console.log("Giá trị bạn nhập là số dương");
    }
    else if (number2 < 0) {
        console.log("Giá trị bạn nhập là số âm");
    }
    else {
        console.log("Giá trị bạn nhập là số 0");
    }

    rl.close();
});
