import React from 'react';
import useInputHooks from '../CustomHooks/useInputHooks';
import TextField from '@mui/material/TextField';

export default function TodoForm({addTodo}){
    const [value,handleChange,reset]= useInputHooks("");
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            addTodo(value);
            reset();
 }}>
         <TextField 
         id="standard-basic" 
         label={value}  
         variant="standard" 
         style={{ marginTop:'5px' }} 
         onChange={handleChange}
         fullWidth
         />
        </form>
    )
}