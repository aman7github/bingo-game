import React from 'react'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Bingo from './bingoGame';
import BlogPage from './blogPage';



{/*<--------------------------Material UI Tab Panel----------------------------------------------------------------------------->   */}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

{/*<------------------------Home Compenent With Tab Navigation------------------------------------------------------------------------------>   */}

const Home = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return <>

  {/* <------------Material UI Tab With 2 Tabs BingoGame and Blog----------------------------------------------------------------------------->      */}
   
<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{fontWeight:'800', fontSize:'1.1rem'}} label="Bingo" {...a11yProps(0)} />
          <Tab sx={{fontWeight:'800', fontSize:'1.1rem'}} label="Tasks" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Bingo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BlogPage />
      </CustomTabPanel>
    </Box>
  
  </>
}

export default Home