let calculateAverageScore = (arrayOfScores) =>{
    if(arrayOfScores.length === 0){
        console.log(0);
        return;
    }
    
    let sumOfNumbersInArray= null;
    let average= null;

    for(i=0; i<arrayOfScores.length; i++){
        
        sumOfNumbersInArray= sumOfNumbersInArray+ arrayOfScores[i];
    }
    average= sumOfNumbersInArray/ arrayOfScores.length;
    
    console.log(average);
}


calculateAverageScore([80, 90, 70, 60]);
calculateAverageScore([100, 90, 95]);
calculateAverageScore([50, 50, 50, 50, 50]);
calculateAverageScore([]);
