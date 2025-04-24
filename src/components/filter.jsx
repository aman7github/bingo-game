import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterBy } from '../features/blogReducer/taskSlice'

  {/* <----------------Filter Component For Filter Blog Task----------------------------------------------------------------------> */}


const Filter = () => {

  const dispatch = useDispatch()
  
   {/* <----------------Filter Fn (dispatching action to blogTask reducer)----------------------------------------------------------------------> */}

   const filterFn=(val)=>{
           dispatch(filterBy(val))    
   }


  return <>

    <select name="" id=""  onChange={(e)=>filterFn(e.target.value)} style={{height:'2rem',marginTop:'1.2rem'}} >
        <option value="">Filter By category</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="women's clothing">women's clothing</option>
    </select>
  
  
  </>
}

export default Filter