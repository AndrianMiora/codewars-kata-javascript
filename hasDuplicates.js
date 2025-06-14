/**
 * Creer une fonction qui verifiesi oui ou non un tableau de string contient 
 * oui ou non des doublons
 */

function hasDuplicates (array){
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i] == array[j]){
                return true;
            }
        }
    }return false;
}
//console.log(hasDuplicates(["berry", "lemon","apple","lemon"])); // true
//console.log(hasDuplicates(["berry","lemon","apple","berry"])); // true
console.log(hasDuplicates([1,2,3,1,4,5,1])); // true
//console.log(hasDuplicates([])); // false