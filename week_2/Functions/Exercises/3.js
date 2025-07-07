function checkExists(arr, item){
    for (i of arr){
        if (i === item){
            return true
        }
    }
    return false;
}

console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));