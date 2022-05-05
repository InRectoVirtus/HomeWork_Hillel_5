function arrayBigger (firstArray, secondArray) {
    
    let sumFirstArray = 0;
    let sumSecondArray = 0;
        
    for(i = 0; i < firstArray.length; i++) {
        if(typeof firstArray[i] == `number`) {
            sumFirstArray += firstArray[i];
        } else {
            continue;
        }
    };

    for(j = 0; j < secondArray.length; j++) {
        if(typeof secondArray[j] == `number`) {
        sumSecondArray += secondArray[j];
        } else {
            continue;
        }
    };

    if (sumFirstArray > sumSecondArray){
        return firstArray;
    } else {
        return secondArray;
    };

};

console.log(arrayBigger([2,1,3], [2,1,2]));
console.log(arrayBigger([2,1,3], [2,5,3]));

console.log(arrayBigger([1,2,3,false, 4, 'hello',5, {x: 10},6], [1,2,3,false, 4, 'hello',5, {x: 10},30]));
console.log(arrayBigger([1,2,3,false, 4, 'hello',5, {x: 10},41], [1,2,3,false, 4, 'hello',5, {x: 10},30]));
