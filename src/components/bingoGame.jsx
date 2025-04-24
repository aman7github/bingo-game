import React, { useEffect } from 'react'
import {Grid,Paper,Box, Button,Container} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { generateMatrix ,generateRandomNumber} from '../features/bingoGameReducer/bingoSlice';

const BingoGame = () => {

    const dispatch = useDispatch();

  {/* <----------------Accessing blogTask Reducer's state value by using useSelector----------------------------------------------------------------------> */}

    const {matrix,randomNumber,matchNumberPositon,isMatched,isShowResult} = useSelector((state) => state.random);

// <----------------------------------Generate Matrix when Page Mounts------------------------------------------------------------------------>
   useEffect(()=>{
     dispatch(generateMatrix())
    },[])
  
// <-----------------------------------Generate Random Number By Click On Button------------------------------------------------------------------------>    
  const getRandomNumFn=()=>{
    dispatch(generateRandomNumber())
  }



return <>
  {/* <----------------Display Message Based on Generated Number Matched or Not to Matrix element ----------------------------------------------------------> */}

 <Box color="teal" fontSize={'1.4rem'} fontWeight={700} >
  {
    !isShowResult ? 'To Start Game Click On Button' : isMatched ? '🎉 Bingo!'  : 'Not Matched with Generated Number'
  }
 </Box>

 <Box display={'flex'} flexDirection={'column'}  alignItems={'center'} border={'12px'} width={'100%'} height={'100%'} gap={4} marginTop={3} >

 
   {/*  <----------------------------------Nested maping for display Matrix------------------------------------------------------------------------> */}
 
  <Box  display="grid"  gridTemplateColumns="repeat(5, 1fr)" border={2}  gridTemplateRows="repeat(5, 1fr)" 
     height="20rem"  width="20rem">

     {
      matrix.map((row, rowIndex) =>
           row.map((value, colIndex) =>{
              let isNumMatched = matchNumberPositon.some(
                ([i, j]) => i === rowIndex && j === colIndex
              );
                return(<Box  key={`${rowIndex}-${colIndex}`} width="100%" height="100%" border={1} 
                             display="flex" alignItems="center"justifyContent="center"fontSize="1.3rem"
                             fontWeight="700"   bgcolor={isNumMatched ? "teal" : "transparent"} 
                             color={isNumMatched ? "white" : "black"}  >
                                     {value}
                      </Box>)
                }) )
      }

  </Box>

 {/*  <---------------Button For Generate Random Number and Box To Dispay That Random Number------------------------------------------------------------------------> */}


  <Box display='flex' justifyContent={'center'} width={'100%'} gap={'2rem'} >

     <Button variant="contained" size='large' onClick={getRandomNumFn} >Generate Random Number</Button>
     <Box border={2} fontWeight={700} width='3rem' height='3rem' display='flex' justifyContent={'center'}alignItems={'center'}  >
            {randomNumber}
     </Box>
   
  </Box>
  
   {/*  <----------------------------------Closing Box Tag of Parent Box------------------------------------------------------------------------> */}

  </Box>

  </>
}

export default BingoGame