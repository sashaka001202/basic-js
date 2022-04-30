const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  let NAMETEAMARR=[]
  let NAMETEAM=''


  if (members==null) {
    return false
}

  for (let index = 0; index < members.length; index++) {
      // console.log(members[index])
      
    if (typeof(members[index])==='string'){
      let NAMEWITHOUTSPACE=members[index].trim().toUpperCase()

      NAMETEAMARR.push(NAMEWITHOUTSPACE[0]);
    
    }
  }
  NAMETEAMARR=NAMETEAMARR.sort()
  for (let index2 = 0; index2 < NAMETEAMARR.length; index2++) {
      NAMETEAM=NAMETEAM+NAMETEAMARR[index2]
      
  }

    return NAMETEAM
}

module.exports = {
  createDreamTeam
};
