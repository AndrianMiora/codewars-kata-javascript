function points(games) {

    let totalPoints = 0; 

    for (let result of games) {
        const [x, y] = result.split(':').map(Number); 
        if (x > y) {
            totalPoints += 3; // situation one of a win
        } else if (x === y) {
            totalPoints += 1; // situation two of a draw
        }
    }

    return totalPoints;
}

