
import React, { useState } from 'react';

const AddTodo = ({addtodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("title or description can not be empty");
    }
    else{
    addtodo(title,desc)
    setTitle("")
    setdesc("")
    }
  }
  return (
    <div className="container my-5">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            ToDo title
          </label>
          <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" value={desc} onChange={(e)=>{setdesc(e.target.value)}} id="desc" />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          add todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
