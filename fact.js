let num = +prompt("Enter the number ",0);
let result = 1;

function fact() {
    for(let iteration = 1; iteration <= num; iteration++)
    {
        result *= iteration;
        console.log(result);
    }
    return result;
}