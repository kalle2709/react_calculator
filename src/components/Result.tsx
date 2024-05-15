import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { RootState } from './store/store';

import './styles.css';


const Result = ()=>
{
    const{sign, value} = useSelector((state: RootState) => state.calculator);
  return (
    <div>
      <Box className = 'resarea'>
            <h2 className = 'value'>{sign}{value}</h2>
     </Box>   
    </div>
  )
}
export default Result;
