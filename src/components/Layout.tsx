import React from 'react'
import { Box, Grid, Stack } from '@mui/material';


import Result from './Result';
import FirstRow from './Firstrow';
import NumberPallet from './NumberPallet';
import Sidepart from './Sidepart';


import './styles.css';

const Layout = () => {
   
  return (
    <div>
        <Grid container spacing={4} className = "maingrid">
            <Grid item>
                <Grid item>
                    <Result/> 
                </Grid>
                
                <Grid item>
                    <Box className = 'resetrow'>
                        <FirstRow/>
                    </Box>
                </Grid>
                <Stack direction = 'row'>
                    <Grid item>
                        <Box className = 'digitscontainer'>
                            <NumberPallet/>                 
                        </Box>
                        
                    </Grid>
                    <Box className = 'Calbox'>
                        <Sidepart />  
                    </Box>
                </Stack>
                
            </Grid>
           
        </Grid>
    </div>
  )
}

export default Layout
