const persistence = (num) => {
    //code me
   let result = 0;
   
   let stringOfNum = num.toString();
   while (stringOfNum.length > 1){
     stringOfNum = String([... stringOfNum].reduce((multiplicator, currentValue) => multiplicator * currentValue))
     result ++
   }
   return result;
 }