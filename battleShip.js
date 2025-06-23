function damagedOrSunk(board, attacks) {
  let result = { sunk: 0, damaged: 0, notTouched: 0, points: 0 };
  let boatParts = {};
  let boatHits = {};

  // total parts of boats
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      let cell = board[y][x];
      if (cell !== 0) {
        boatParts[cell] = (boatParts[cell] || 0) + 1;
      }
    }
  }

  // attacks
  for (let [x, y] of attacks) {
    let yPosition = board.length - y; // y-coordinate
    let xPosition = x - 1;            // x-coordinate

    // attack hits boat ?
    if (yPosition >= 0 && yPosition < board.length && xPosition >= 0 && yPosition < board[0].length) {
      let hit = board[yPosition][xPosition];
      if (hit !== 0) {
        boatHits[hit] = (boatHits[hit] || 0) + 1;
      }
    }
  }

  // results
  for (let boat in boatParts) {
    let totalParts = boatParts[boat];
    let hits = boatHits[boat] || 0;

    if (hits === 0) {
      result.notTouched++;
      result.points -= 1;
    } else if (hits < totalParts) {
      result.damaged++;
      result.points += 0.5;
    } else if (hits === totalParts) {
      result.sunk++;
      result.points += 1;
    }
  }

  return result;
}


/**
 * function damagedOrSunk(board,attack){
    let result = {sunk: 0, damaged: 0, notTouched: 0, points: 0};
     let touch=0;
     for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        let y = attack[0][0];
        let x = attack[0][1];
        let cellTouched = board[y][x];
        if (cellTouched !== 0) { 
          touch +=1 
        }
      }
    }
        for (let boat in batteau) {
          let totalParts = batteau[boat];    
    
        if (touch === 0) {
          result.notTouched++;
          points -= 1;
        } else if (touch < totalParts) {
          result.damaged++;
          points += 0.5;
        } else if (touch === totalParts) {
          result.sunk++;
          points += 1;
        }
        return result;
        }
      }

 */