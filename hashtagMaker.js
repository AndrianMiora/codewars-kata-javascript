function titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
} 
console.log(titleCase("I'm a little tea pot"));

function deleteAllSpaces (str = "") {
    return str.replaceAll(" ", "")
}
console.log(deleteAllSpaces("I am a little potato"))

/* ------------------------------------------------------------------------------------*/

function generateHashtag (str) {
    let array = str.toLowerCase().split(" ").filter((word) => word != "");
    // ["my", "awesome", "code"]
    let result = "#"
    
    for (let i = 0; i < array.length; i++) {
        result += array[i][0].toUpperCase();
        // M
        // A
         result += array[i].slice(1)
        // y
        // wesome
    }
    if (result.length > 140 || result.length == 0) return false      
    else return result;
}
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));