const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  let DISNEXT ="--discard-next";
  let DISPREV ="--discard-prev";
  let DBNEXT ="--double-next";
  let DBPREV ="--double-prev";
  
  
  if (!Array.isArray(arr)){
      throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  
  
  let newArr=arr.concat()
  let resultArr=[]
  console.log(newArr.length)
  
  
  
  for (let index = 0; index < newArr.length; index++) {
   
      if (newArr[index]==DISNEXT){
  
          newArr.splice(index+1, 1)
      }else if((newArr[index]==DISPREV)&&(newArr[index]!=DBNEXT)){
          
          resultArr.splice(index-1, 1)
      }else if(newArr[index]==DBNEXT){
  
          resultArr.splice(index+1, 0,newArr[index+1])
      }else if(newArr[index]==DBPREV){
          if (newArr[index-1]!=DISNEXT){
              resultArr.splice(index, 0,newArr[index-1])
          }
          
      }else{
          resultArr.push(newArr[index])
      }
  
      
  }
  
  resultArr.forEach((item, index) => {
      if (item === undefined)
      {resultArr.splice(index, 1) }
      
    });
  
  
  return resultArr
  return resultArr
}

module.exports = {
  transform
};
