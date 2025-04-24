import { Button } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/blogReducer/taskSlice';



export default function ThemeBtn() {
     const dispatch = useDispatch()
    const {theme} = useSelector(state=>state.task)
 {/*<----------------------------Theme Toggle Fn------------------------------------------------------------------------>   */}   
    const toggle=()=>{
        dispatch(toggleTheme())
    }


    return <>
  {/*<-----------------------Theme Toggle Button -------------------------------------------------------------------------------->   */}      
       
        <Button  onClick={toggle} variant={"outlined" } type="submit" sx={{  border: theme ? '2px solid white':'2px solid black',
           color:theme ? 'white':'black'  }}  >
            {theme ?'Light Theme':'Dark Theme'}
        </Button>
       
       </>
  }

