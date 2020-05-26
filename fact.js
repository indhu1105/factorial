function fact(num) {
    let result = 1;
    for(let iteration = 1; iteration <= num; iteration++)
    {
         result *= iteration;
    }
    return result;
}

module.exports = fact;