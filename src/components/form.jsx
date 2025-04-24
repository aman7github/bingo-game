
import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';
import { useSelector } from 'react-redux';

{/* <------------ Form Component Recieving Submit Fn as Props for Re-using This Component----------------------------------------------------------------------------->      */}
   
const Form = ({onSubmit}) => {
    
    const {theme} = useSelector(state=>state.task)

    {/* <------------For Storing From's Input Value ---------------------------------------------------------------------------->      */}
   
    const [formData, setFormData] = useState({
        id: Math.random(),
        title: '',
        description: '',
        category: ''
      });

    {/* <------------ Onchange Event For Accessing Form's Input value---------------------------------------------------------------------------->      */}
  
      const handleChange = (e) => {
        setFormData(prev => ({
          ...prev, [e.target.name]: e.target.value
        }));
      };

    {/* <------------Submit Fn (using Fn Pass as Props) For Submitting Form And Set Input Value Empty String ----------------------------------------------------------------------------->      */}
   
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
        setFormData({ title: '', description: '', category: '' }); 
      };

  return <>

  {/* <----------------Material UI Form . onChange event on input----------------------------------------------------------------------> */}

  <Box component="form" onSubmit={handleSubmit} display="flex"  variant='outlined'
      flexDirection="column" gap={2} width="20rem" margin={'auto'}  sx={{ bgcolor: theme ? 'black' : 'white' }}   >
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
        required
        sx={{ bgcolor: 'white' }}
       
      />

      <FormControl fullWidth required>
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={formData.category}
          onChange={handleChange}
          label="Category"
          sx={{ bgcolor: 'white' }}
        >
          <MenuItem value="men's clothing">men's clothing</MenuItem>
          <MenuItem value="electronics">electronics</MenuItem>
          <MenuItem value="jewelery">jewelery</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        required
        sx={{ bgcolor:'white' }}
      />
     
      {/* <-------------------------Submit Button to Submit Form's Input Value-------------------------------------------------------------> */}

      <Button variant={theme ?"outlined": "contained" } type="submit" sx={{  border: theme ? '2px solid white':'none', color:'white'  }}  >
        Submit
      </Button>
      
    </Box>
  
  
  </>
}

export default Form