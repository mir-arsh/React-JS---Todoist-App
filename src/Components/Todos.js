import {TodoItem} from './TodoItem';

export const Todos = (props) => {
  return (
    <div className='container'>
      <div className="todo-main">
        <h3 className='todo-h3'>Todo List</h3>
        {props.todos.length === 0 ? <h4 className='noDisplay'>Nothing to display here</h4> : 
        props.todos.map((todo) => {
          return <TodoItem todo={todo} onDelete={props.onDelete}/>
        })}
      </div>
    </div>
  );
};