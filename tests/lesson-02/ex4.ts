import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const handleHeightInput = () => {
    rl.question("Nhập chiều cao (> 100 cm): ", (input) => {
        const height: number = parseInt(input);

        if (height > 100) {

            console.log("Cân nặng lý tưởng của bạn là: " + (height - 100) * 0.9 + " kg" + "\n" + "Cân nặng tối đa là: " + (height - 100) + " kg" + "\n" + "Cân nặng tối thiểu là: " + (height - 100) * 0.8 + " kg");
            rl.close();
    
        } else {

            console.log("Chiều cao bạn nhập không hợp lệ. Vui lòng nhập lại.");
            handleHeightInput();
   
        }

    });
};

handleHeightInput();