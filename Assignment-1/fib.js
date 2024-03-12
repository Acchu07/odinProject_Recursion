const fibArray = [];

function getFibonacci(number){
    if(number === 0){
        return 0
    }
    if(number === 1){
        return 1
    }
    return getFibonacci(number - 1) + getFibonacci(number-2)
}


function numbersTillFibonacci(number,counter = 0){
    if(counter === number){
        return;
    }
    fibArray.push(getFibonacci(counter))
    numbersTillFibonacci(number,++counter)
    return;

}

numbersTillFibonacci(10)
console.log(fibArray)





// function numbersTillFibonacci(number){
    //     const fibArray = [];
    //     for(let counter = 0; counter < number; counter++){
    //         fibArray.push(getFibonacci(counter));
    //     }
    //     console.log(fibArray);
    // }