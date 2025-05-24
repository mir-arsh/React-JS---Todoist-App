export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
      <div className="todo-item">
          <div className = "todo-item1">
              <h3 className='todo-title'>{todo.sno + ". "}{todo.title + " "}</h3>
          </div>
          <div className = "todo-item2">
              <button className="delete" onClick={() => onDelete(todo)}>Delete</button>
          </div>
      </div>
    </>
  )
}