function arrayBigger (firstArray, secondArray) {
    let sumFirstArray = 0;
    let sumSecondArray = 0;
    if(((firstArray.every((elem) => typeof elem == 'number')) == true) && ((secondArray.every((elem) => typeof elem == 'number')) == true)) {
        
        for(let i = 0; i < firstArray.length; i++) {
            sumFirstArray += firstArray[i];
        };

        for(let j = 0; j < secondArray.length; j++) {
            sumSecondArray += secondArray[j];
        };

        if(sumFirstArray > sumSecondArray) {
            return firstArray;

        } else if (sumFirstArray < sumSecondArray) {
            return secondArray;

        }; 

    } else {
        return `your array has another type element`;
    };
};

arrayBigger ([2,1,3], [2,1,2]);
arrayBigger ([2,1,3], [2,5,3]);
arrayBigger ([2,`s`,3], [2,3,3]);
