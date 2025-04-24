import { createSlice } from '@reduxjs/toolkit';

{/* <----------------bingoSlice Reducer For BigoGame----------------------------------------> */}
 
const randomSlice = createSlice({
name:'random',
initialState:{
              matrix:[],
              randomNumber:'',
              matchNumberPositon:[],
              isMatched:false,
              isShowResult:false
             },
reducers:{

// <---------------------generate Matrix of Random Numbers------------------------------------>

generateMatrix:(state,action)=>{
    state.matrix = Array(5).fill(0).map(() =>
      Array(5).fill(0).map(() => Math.floor(Math.random() * 25+1))
    );
   
},

// <----------------- Verify Generated Random Number is Matching With any Matrix Element -------------------------------------->

generateRandomNumber:(state,action)=>{
let num = Math.floor(Math.random()*25+1)
state.randomNumber=num
state.matchNumberPositon=[]
state.isMatched=false
for(let i=0;i<state.matrix.length;i++){
     for(let j=0;j<state.matrix[0].length;j++){
       if(state.matrix[i][j]==num){
         state.matchNumberPositon.push([i, j])
         state.isMatched=true
        
       }
     }
}
state.isShowResult=true

}


}

})

export const {generateMatrix,generateRandomNumber} = randomSlice.actions

export default randomSlice.reducer