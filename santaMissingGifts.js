// Santa's Missing Gift List

const gift = (number) => {
    //if ( Object.keys(giftsList).includes(number) ) {
      //  return Object.values
    //} else {}
    const giftsList = {
        1 : 'Toy Soldier',
        2 : 'Wooden Train',
        4 : 'Hoop',
        8 : 'Chess Board',
        16 : 'Horse',
        32 : 'Teddy',
        64 : 'Lego',
        128 : 'Football',
        256 : 'Doll',
        512 : "Rubik's Cube"
    }
    let giftKeys = Object.keys(giftsList).map(Number).sort((a, b) => b - a);
    let selectedGifts = [];
    
    for (let key of giftKeys) {
        if (number >= key) {
            selectedGifts.push(giftsList[key]);
            number -= key;
        }
    }
    return selectedGifts.sort();

}





//console.log(gift(1)); //to.deep.equal(['Toy Soldier]);
//console.log(gift(160)); //to.deep.equal(['Football', 'Teddy']);

// const gift = (number) => Object.entries(giftsList).filter(x => x[0] & number).map(x => x[1]).sort();


/* ------------------------------------------------------------------------------*/

function getKeyByValue(object, value) {
    
    const keys = Object.keys(object);
    
    const index = keys.indexOf(value);
    
    const values = Object.values(object);
    
    return values[index];
    
}

let obj = {
    name: "Alice",
    age: 25,
    city: "London"
};

console.log(getKeyByValue(obj, "age"));

function closest (num, arr) {
    let curr = arr[0];
    let diff = Math.abs (num - curr);
    for (let val = 0; val < arr.length; val++) {
        let newdiff = Math.abs (num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    return curr;
}
array = [2, 42, 82, 122, 162, 202, 242, 282, 322, 362];
number = 112;
console.log(closest (number, array));



/* ------------------------------------------------------------------------------*/

//Correction
const giftsList = {
    1 : 'Toy Soldier',
    2 : 'Wooden Train',
    4 : 'Hoop',
    8 : 'Chess Board',
    16 : 'Horse',
    32 : 'Teddy',
    64 : 'Lego',
    128 : 'Football',
    256 : 'Doll',
    512 : "Rubik's Cube"
}

function getGiftIndex (number) {
    const giftKeys = Object.keys(giftsList);
    return giftKeys.filter((giftKeys) => giftKeys <= number).at(-1)
}

function gift (number) {
    let result = []

    while (number > 0) {
        result.push(giftsList[getGiftIndex(number)])
        number -= getGiftIndex(number)
    }
    return result.sort();
}