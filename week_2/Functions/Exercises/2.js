function isEven(number){
    return number%2 === 0 ? true : false;
}

function arrayChecker(arr){
    for (let item of arr){
        console.log(isEven(item));        
    }

}

arrayChecker([1,2,3,4,5,6,7,8,9,10])
