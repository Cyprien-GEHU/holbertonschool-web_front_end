console.log("Start of the execution queue");

setTimeout(() => {
    console.log("Final code block to be executed")
}, 0);

for (let count = 0; count < 101; count++){
    console.log(count);
};
console.log("End of the loop printing");