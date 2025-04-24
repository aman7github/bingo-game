
import { createSlice } from "@reduxjs/toolkit";

// <------------------taskSlice Reducer For BlogPage--------------------------------------->

const bingotaskSlice = createSlice({

name:"task",
initialState:{
    taskArray:[],
    allTasks: [],
    theme:false,
    isLoading:true,
    isError:false
},

reducers:{
// <-----------   setting Loading true while data Fetching For Blog Task---------------------------------------------->

isLoadingFn:(state,action)=>{
    state.isLoading=true,
    state.isError=false
}, 

// <------------ Display Error While Error at Any Server Request-------------------------------------------->

isErrorFn:(state,action)=>{
    state.isLoading=false,
    state.isError=true
},

// <--------------Getting Task From reducer's taskArray ------------------------------------------->

getTask:(state,action)=>{
state.isLoading=false,
state.isError=false
state.taskArray=action.payload
state.allTasks=action.payload
},

// <-----------------Posting task in reducer's taskArray---------------------------------------->

addTask:(state,action)=>{
state.taskArray.unshift(action.payload)
},

// <--------------- Deleting task from reducer's taskArray------------------------------------------>

deleteTask:(state,action)=>{
  state.taskArray = state.taskArray.filter((el)=>{
    return el.id!==action.payload
})
},

// <----------------Updating task from reducer's taskArray---------------------------------------->

updateTask:(state,action)=>{
  const{id,updatedItem} = action.payload
     state.taskArray = state.taskArray.map((el)=>{
     return el.id===id?{...el,...updatedItem} : el
 })
},


// <----------------Filter taskArray based on Filter query----------------------------------------->

filterBy:(state,action)=>{
   state.taskArray = !action.payload? state.allTasks :state.taskArray = state.allTasks.filter((el)=>{
        return el.category===action.payload
   })
},

// <-------------------Toggle theme value-------------------------------------->

toggleTheme:(state,action)=>{
    state.theme=!state.theme
  }


}



})



export const {getTask,addTask,deleteTask,updateTask,filterBy,isErrorFn,isLoadingFn,toggleTheme} = bingotaskSlice.actions

export default bingotaskSlice.reducer