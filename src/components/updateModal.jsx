import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { updateTask } from '../features/blogReducer/taskSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';


  {/* <----------------Material UI Modal Component For Updating Blog Task---------------------------------------------------------------------> */}

export default function UpdateModal({id,el}) {

    const [open, setOpen] = React.useState(false);
 
    {/* <----------------For Storing Updated Input Value ----------------------------------------------------------------------> */}
    
    const [update, setUpdate] = React.useState({
          title: '',
          description: '',
          category:''
        });

   {/* <----------------onChange fn For Accessing Update Form Input's value----------------------------------------------------------------------> */}
   
        const handleChange = (e) => {
          setUpdate(prev => ({
            ...prev, [e.target.name]: e.target.value
          }));
        };

  {/* <----------------useDispatch and useSelector ----------------------------------------------------------------------> */}

        const dispatch = useDispatch()   
        const{title,description,category} = update

   {/* <----------------Fn For Open Update Modal----------------------------------------------------------------------> */}

     const handleClickOpen = () => {
       setOpen(true);
      };

  {/* <----------------Fn For close Update Modal----------------------------------------------------------------------> */}
   
     const handleClose = () => {
      setOpen(false);
     };

  {/* <----------------updateTask Fn for update Blog Task on Server ----------------------------------------------------------------------> */}
    
  const updateTaskFn= (id)=>{
    axios.put(`https://fakestoreapi.com/products/${id}`,{
      ...el,title,description,category
     })
    .then(res => {
        let updatedItem = res.data
        dispatch(updateTask({id,updatedItem}))
          handleClose();
    })
    .catch(error => {
        console.error("Error fetching data: ", error);
    })
 

  }

  

  return (
    <>
     {/* <--------------------Material UI Modal----------------------------------------------------------------------> */}
 
      <Button variant="outlined" sx={{width:40,height:40}} onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
      
        <DialogContent>
             <TextField
                     label="Title"
                     name="title"
                     value={update.title}
                     onChange={handleChange}
                     fullWidth
                     required
                   />
                      <TextField
                     label="description"
                     name="description"
                     value={update.description}
                     onChange={handleChange}
                     fullWidth
                     required
                   />


                     <FormControl fullWidth required>
                          <InputLabel>Category</InputLabel>
                              <Select
                                    name="category"
                                    value={update.category}
                                    onChange={handleChange}
                                    label="Category" >
                                         <MenuItem value="Work">Work</MenuItem>
                                         <MenuItem value="Personal">Personal</MenuItem>
                                         <MenuItem value="Study">Study</MenuItem>
                              </Select>
                  </FormControl>

        </DialogContent>


        <DialogActions>

   {/* <---------------- Update Button in Modal For Update Task----------------------------------------------------------------------> */}
      
        <Button onClick={()=>updateTaskFn(id)}>update</Button>

   {/* <----------------Close Button For Close that Modal----------------------------------------------------------------------> */}
      
          <Button onClick={handleClose}>Cancel</Button>

        </DialogActions>
      </Dialog>
    </>
  );
}
