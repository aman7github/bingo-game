import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UpdateModal from './updateModal';
import { useSelector } from 'react-redux';



export default function List({id,title,category,description,delFn,el}) {
 
  const {theme} = useSelector(state=>state.task)
  
  return (
    <Box >

 {/* <------------Material UI Card Component For Display All Tasks----------------------------------------------------------------------------->      */}
   
    <Card key={id}  variant="outlined"  sx={{ width:{  xs: "100%",sm: 400,md: 500 ,marginTop:'1rem'   } , mx: "auto" , 
           bgcolor: theme ? 'black' : 'white',color: theme ? 'white' : 'black' ,   borderColor: theme ? "white" : "black"  }}  >
    
      <CardContent>   
        <Typography variant="h6" component="div" >
           {title}
        </Typography>
        <Typography variant="body2" sx={{fontSize:'1.1rem'}} >
           {category}
        </Typography>
        <Typography  gutterBottom sx={{  fontSize: 14 }}>
           {description}
        </Typography>
      </CardContent>

{/* <------------------Card Upadate And Delete Button---------------------------------------------------------------------------->      */}
   
      <CardActions>
        {/* <------------update Button----------------------------------------------------------------------------->      */}    
       
        <UpdateModal  id={id} el={el} />
       
        {/* <------------Delete Button----------------------------------------------------------------------------->      */}
   
        <Button size="large" onClick={()=>delFn(id)} variant="outlined" >Delete</Button>
      </CardActions>
    
    </Card>
    </Box>
  );
}
