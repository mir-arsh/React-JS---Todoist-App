import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Todo not specified! Please specify a todo.");
        } else{
            props.addTodo(title);
            setTitle("");
        }
    }
  return (
    <div className='addTodo'>
      <p className="addHead">Add Todo</p>
      <div className="adding">
        <form onSubmit={submit}>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="addtitle" placeholder="Todo" />
            <button type="submit" className='addbtn'>Add</button>
        </form>
      </div>
    </div>
  )
}