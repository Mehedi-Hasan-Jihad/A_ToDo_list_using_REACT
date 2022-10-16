import React from 'react'
import TodoList from './TodoList'



export const Todos = (props) => {
  let contain={
    minHeight: "70vh",
    margin: "40px auto"
  
  }
  return (
    <>
    <div className='container' style={contain}>
    <h3 className='sm- my-3'>Your TODOs List is here</h3>
    {props.todos.length===0?"No more todos left to display":

    props.todos.map((todo)=>{
    

        return<TodoList todo={todo} key={todo.SNo} onDelete={props.onDelete}/>

    }
    )}
      
    </div>
    </>
  );
}

export default Todos


