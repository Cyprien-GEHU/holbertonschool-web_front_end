function countPrimeNumbers() {
    let num = 0;

    for (let i = 2; i < 101; i++) {
        for (let x = 2; x <= i; x++) {
            if (i%x === 0 && x!==i){
                break
            }
            if (i%x === 0 && x === i) {
                num++;
            }
        }
    }
    return num
}

const begin = performance.now();
console.log(countPrimeNumbers());
const end = performance.now();
const time = end - begin;
console.log(`Execution time of printing countPrimeNumbers was ${time} milliseconds.`);
