
import { useState,useEffect } from 'react';
import { Box} from '@mui/material';
import { addTask,deleteTask,getTask,isLoadingFn,isErrorFn } from '../features/blogReducer/taskSlice';
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import Form from './form';
import List from './list';
import Filter from './filter';
import ThemeBtn from './themeBtn';


const BlogPage = () => {

    const dispatch = useDispatch()
    const {taskArray,isLoading,isError,theme} = useSelector(state=>state.task)

// <---------------------useEffect For Getting Task List When Page Mounts------------------------------------------------------------------------>
       
       useEffect(()=>{
          getTaskFn()
        },[])

 // <----------------------Get Request to Server For Loading Task List--------------------------------------------------------------------------------->  
     
  const getTaskFn=()=>{
            dispatch(isLoadingFn())
            axios.get('https://fakestoreapi.com/products')
            .then(res => {
                dispatch(getTask(res.data))
            })
            .catch(error => {
                dispatch(isErrorFn)
                console.error("Error fetching data: ", error);
            })
        }
    
 // <-----------------------Post Request to Server For Adding New Task--------------------------------------------------------------------------------> 
      
  const addTaskFn=(data)=>{ 
         axios.post('https://fakestoreapi.com/products',{
           ...data
         })
        .then(res => {
            dispatch(addTask(res.data))
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        })
    
    }

// <-------------------Delete Request To Server For Deleting Existing Task----------------------------------------------------------------------------->
    
   const deletTaskFn=(id)=>{ 
       axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then(res=>dispatch(deleteTask(id)))
        .catch(err=>console.log(err))
    }



  return <>

   {/*<---------------------------Display Loading While Fechting Data---------------------------------------------------------------------------------------->   */}
     {
        isLoading===true? <h1>...Loading</h1>:isError===true?<h1>Network Error</h1> : <Box  bgcolor={theme?'black':'white'}  >

    {/*<------------------------------Theme toggle Button------------------------------------------------------------------------------------>   */}  
       
        <Box display={'flex'} justifyContent={'start'} >
         <ThemeBtn />
        </Box>
    
    {/*<----------------------------Import Form Comeponent-------------------------------------------------------------------------->   */}
       
        <Form onSubmit={addTaskFn} />

   {/*<------------------------------Import Filter Component------------------------------------------------------------------------->   */}       
       
        <Filter />

  {/*<-------------------------------Import And Map List Compenent by taskArray From bingoTask Reducer ------------------------------------------------------------------------>   */}        
         <Box marginTop={'3rem'}  >
              {
                    taskArray.map((el)=>{
                         return <List key={el.id} el={el} {...el} delFn={deletTaskFn} />
                    })
    
              }
         </Box> 
    
     </Box>
     }
    
 


     </>
};

export default BlogPage;


