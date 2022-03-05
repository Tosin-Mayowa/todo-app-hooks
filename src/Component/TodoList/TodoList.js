import React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import { ListItem, ListItemText, Divider, Checkbox, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
const TodoList =({todo,toggleCompleted,updateTasks,removeTodo})=>{

const [isEditing, setIsEditing]= useState(false);
const [value,setValue]= useState(todo.task);
const toggle=()=>{
    setIsEditing(!isEditing);
}
const handleRemove=()=>{
    removeTodo(todo.id);
}
const handleChange=(e)=>{
    setValue(e.target.value);
}

const handleSubmit=(e)=>{
    e.preventDefault();
    updateTasks(todo.id,value);
    setIsEditing(!isEditing);
}
let result;

if(isEditing){

 result=    <form onSubmit={handleSubmit}>
         <TextField 
         id="outlined-basic" 
         label={value}  
         variant="filled" 
         style={{ marginTop:'5px' }} 
         onChange={handleChange}
         fullWidth
         />
        </form>

}else{
 result=    <Paper>
<List>
   <>
    <ListItem>
<Checkbox checked={todo.completed} onClick={()=>(
    toggleCompleted(todo.id)
)} />
    <ListItemText style={{ 
        textDecoration: todo.completed?'line-through': 'none',
    color: todo.completed?'gray': 'black'
    }}

    >{todo.task}</ListItemText>
    <ListItemSecondaryAction>
    <IconButton arial-label="Delete" onClick={handleRemove}>
    <DeleteIcon />
    </IconButton>
    <IconButton arial-label="Edit" onClick={toggle}>
    <EditIcon />
    </IconButton>
    </ListItemSecondaryAction>
    </ListItem>
   <Divider/>
    </>
</List>
</Paper>


}

return result;

}

export default TodoList;
