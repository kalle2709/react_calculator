import React from 'react'
import { useDispatch } from 'react-redux';
import { Button, Chip, Stack } from '@mui/material';

import { valueChange } from './store/calculatorSlice';
import './styles.css';


const NumberPallet = () =>
{
    const dispatch = useDispatch();
   

  return (
    <Stack spacing={2}>
            <Stack direction='row' spacing={2}>
                <Button className = {`${'digit'}`} onClick = {() => dispatch(valueChange("7"))}><span className = 'digittext' >7</span></Button>
                <Button className = {`${'digit'}`} onClick={() => dispatch(valueChange("8"))}><span className = 'digittext'>8</span></Button>
                <Button className = {`${'digit'}`} onClick={() => dispatch(valueChange("9"))}><span className = 'digittext' >9</span></Button>
                                    
            </Stack>
            <Stack direction='row' spacing={2}>
                <Button className = {`${'digit'}`} onClick = {() => dispatch(valueChange("4"))}><span className = 'digittext'>4</span></Button>
                <Button className = {`${'digit'}`} onClick = {() => dispatch(valueChange("5"))}><span className = 'digittext'>5</span></Button>
                <Button className = {`${'digit'}`} onClick = {() => dispatch(valueChange("6"))}><span className = 'digittext'>6</span></Button>
            </Stack>
            <Stack direction='row' spacing={2}>
                <Button className = {`${'digit'}`} onClick = {() => dispatch(valueChange("1"))}><span className = 'digittext'>1</span></Button>
                <Button className = {`${'digit'}`} onClick = {() => dispatch(valueChange("2"))}><span className = 'digittext'>2</span></Button>
                <Button className = {`${'digit'}`} onClick = {() => dispatch(valueChange("3"))}><span className = 'digittext'>3</span></Button>
            </Stack>
            <Stack direction = 'row' spacing={2}>
                <Chip label = "0" className = {`${'zero'}`} onClick = {() => dispatch(valueChange("0"))}></Chip>
                <Button className = {`${'dot'}`} onClick = {() => dispatch(valueChange("."))}><span className = 'digittext'>.</span></Button>
            </Stack>
    </Stack>           
  )
}
export default NumberPallet;