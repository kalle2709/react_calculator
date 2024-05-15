import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import PercentIcon from '@mui/icons-material/Percent';
import DragHandleIcon from '@mui/icons-material/DragHandle';

import { RootState } from '../store/store';
import { div, mul, result, sub } from '../store/calculatorSlice';

import './styles.css';

const Sidepart = () => 
{
  const dispatch = useDispatch();
  const {value} = useSelector((state: RootState) => state.calculator);

  return (
    <Stack spacing={2}>
         <Button className="button" onClick={()=> dispatch(sub(value))}><HorizontalRuleIcon style={{ color: 'white' }}/></Button>
         <Button className="button" onClick={()=> dispatch(mul(value))}><CloseIcon style={{ color: 'white' }}/></Button>
         <Button className="button" onClick={()=> dispatch(div(value))}><PercentIcon style={{ color: 'white' }}/></Button> 
         <Button className="button" onClick = {() => dispatch(result(value))} ><DragHandleIcon style={{ color: 'white' }}/></Button> 
    </Stack>
  )
}

export default Sidepart
