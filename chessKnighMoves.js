function knightMoves(x, y){
    let allCoordinates= "";

    let x1= x - 2;
    let y1= y - 1;
    if(x1>= 1 && x1<= 8 && y1>= 1 && y1<= 8){
        //append the 2 in allCoordinates string
        allCoordinates+= `${x1},${y1}, `;
    }

    let x2= x - 2;
    let y2= y + 1;
    if(x2>= 1 && x2<= 8 && y2>= 1 && y2<= 8){
        //append the 2 in allCoordinates string
        allCoordinates+= `${x2},${y2}, `;
    }

    let x3= x - 1;
    let y3= y - 2;
    if(x3>= 1 && x3<= 8 && y3>= 1 && y3<= 8){
        //append the 2 in allCoordinates string
        allCoordinates+= `${x3},${y3}, `;
    }

    let x4= x - 1;
    let y4= y + 2;
    if(x4>= 1 && x4<= 8 && y4>= 1 && y4<= 8){
        //append the 2 in allCoordinates string
        allCoordinates+= `${x4},${y4}, `;
    }

    let x5= x + 1;
    let y5= y - 2;
    if(x5>= 1 && x5<= 8 && y5>= 1 && y5<= 8){
        //append the 2 in allCoordinates string
        allCoordinates+= `${x5},${y5}, `;
    }

    let x6= x + 1;
    let y6= y + 2;
    if(x6>= 1 && x6<= 8 && y6>= 1 && y6<= 8){
        //append the 2 in allCoordinates string
        allCoordinates+= `${x6},${y6}, `;
    }

    let x7= x + 2;
    let y7= y - 1;
    if(x7>= 1 && x7<= 8 && y7>= 1 && y7<= 8){
        //append the 2 in allCoordinates string
        allCoordinates+= `${x7},${y7}, `;
    }

    let x8= x + 2;
    let y8= y + 1;
    if(x8>= 1 && x8<= 8 && y8>= 1 && y8<= 8){
        //append the 2 in allCoordinates string
        allCoordinates+= `${x8},${y8}, `;
    }

    console.log(allCoordinates + "\n");
}

knightMoves(4, 4);
knightMoves(1, 1);
knightMoves(8, 8);
knightMoves(5, 7);