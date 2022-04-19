function arrayBigger (firstArray, secondArray) {
    let sumFirstArray = 0;
    let sumSecondArray = 0;
    if(((firstArray.every((elem) => typeof elem == 'number')) == true) && ((secondArray.every((elem) => typeof elem == 'number')) == true)) {
        
        for(i = 0; i < firstArray.length; i++) {
            sumFirstArray += firstArray[i];
        };

        for(j = 0; j < secondArray.length; j++) {
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

