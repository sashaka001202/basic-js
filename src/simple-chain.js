const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  Arr:[],
  

  getLength() {
      return this.Arr.length
  },
  addLink(value) {

      
      if (value===null){
          value ='null'
      }

      
       this.Arr.push(value)
       return this
  },
  removeLink(position) {

      if (!Number(position)||position<1||position>this.Arr.length){
          this.Arr=[]
          throw new Error('You can\'t remove incorrect link!')
      }

      this.Arr.splice(position-1,1)
      return this
  },
  reverseChain() {
      this.Arr.reverse()
      return this
  },
  finishChain() {
    let newArr=[];
      if (this.Arr.length==1){
          newArr='( '+this.Arr[0]+' )'
      }
      else {
          let first ='( '+this.Arr[0]
          let last =this.Arr[this.Arr.length-1]+' )'
          
          
          this.Arr.splice(0,1,first)
          this.Arr.splice(this.Arr.length-1,1,last )
  
          newArr=this.Arr.join(' )~~( ')
      }

      
      this.Arr=[]
      return newArr
  }
};

module.exports = {
  chainMaker
};
