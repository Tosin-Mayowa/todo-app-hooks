import React, { useState,useEffect } from 'react';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import { red } from '@mui/material/colors';
import { Toolbar, Typography, Grid } from '@mui/material';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
  const initialTodos=JSON.parse(window.localStorage.getItem('todos') || []);;
  const [todos,setTodo]=useState(initialTodos);
  const addTodo=(newTodo)=>{
      setTodo([...todos,{id:uuidv4(),task:newTodo,completed:false}]);
  }
  useEffect(()=>{
    window.localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])
const removeTodo=(id)=>{
  const updateTodo=todos.filter(todo=>todo.id!==id);
setTodo(updateTodo);
}


const toggleCompleted=(id)=>{
  const updateCompleted=todos.map(todo=>{
    if(todo.id===id){
     return {...todo,completed:!todo.completed};
    }else{
      return todo;
    }
    
  })
  setTodo(updateCompleted);
}

const updateTasks=(id,task)=>{
  const update=todos.map(todo=>{
    if(todo.id===id){
     return {...todo,task:task};
    }else{
      return todo;
    }
    
})
setTodo(update);
}
    return(
      <Paper
      style={{ 
        margin: 0,
        padding: 0,
        height: '100vh',
        backgroundColor:'white',
       }}
       elevation={0}
      >
     <AppBar color='primary' position='static' style={{ height:"64px" }}> 
      <Toolbar>
      <Typography color='inherit'>Mayowa TodoHooks App</Typography>
      </Toolbar>
      </AppBar>
      <Grid container  style={{ marginTop:"1rem", justifyContent:'center' }} >
<Grid item xs={11} md={8} lg={4}>
      <TodoForm addTodo={addTodo}/>
     {todos.map(todo=><TodoList key={todo.id} todo={todo} removeTodo={removeTodo} toggleCompleted={toggleCompleted} updateTasks={updateTasks} />)} 
      </Grid>
      </Grid>
      </Paper>
      
      
      
    )
}