let count: number = 4;

for (let i: number =1; i <= 100; i++) {
    if (count == 4) {
        console.log(i);
        count = 1;
    } else {
        count++;
    }
}