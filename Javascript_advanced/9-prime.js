function countPrimeNumbers() {
    let num = 0;

    for (let i = 2; i < 101; i++) {
        if(prime(i)) {
            num++;
        }
    }
}

function prime(num) {
    for (let x = 2; x < num; x++) {
        if(x % num === 0)
            return false
    }
    return num > 1
}

const begin = performance.now()
countPrimeNumbers();
const end = performance.now()
const time = end - begin;
console.log(`Execution time of printing countPrimeNumbers was ${time} milliseconds.`)