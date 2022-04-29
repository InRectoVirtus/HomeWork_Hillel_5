function arrayBigger (firstArray, secondArray) {
    let sumFirstArray = 0;
    let sumSecondArray = 0;
     
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
};

arrayBigger ([2,1,3], [2,1,2]);
arrayBigger ([2,1,3], [2,5,3]);

