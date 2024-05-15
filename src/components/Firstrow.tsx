import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { add, percentage, reset, signSymbol } from '../store/calculatorSlice';
import { RootState } from '../store/store';

import './styles.css';


const FirstRow = () =>
{
   
    const dispatch = useDispatch();
    const { value,resetlabel} = useSelector((state: RootState) => state.calculator);

  return (
    <div>
        <Stack spacing={2} direction='row'>
            <Button className={`${'reset'}`} onClick={() => dispatch(reset())}>{resetlabel}</Button>
            <Button className={`${'reset'}`} onClick={()=>dispatch(signSymbol())}>+/-</Button>
            <Button className={`${'reset'}`} onClick={()=> dispatch(percentage())}>PC</Button>
            <Button className="button" onClick = {() => dispatch(add(value))}><AddIcon style={{ color: 'white' }}/></Button>
        </Stack>
    </div>
  )
}

export default FirstRow