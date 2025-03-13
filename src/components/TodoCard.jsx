export default function TodoCard(props)
{
    const {todo, todoIndex, handleDeleteTodo, handleCompleteTodo} = props;

    return(
        <div className="card todo-item">
            <p>
                {todo.input}
            </p>
            <div className="todo-buttons">
                <button type="button" disabled={todo.complete}
                    onClick={ () => {handleCompleteTodo(todoIndex)}
                } aria-label="Click to mark task as complete">
                    <p>Done</p>
                </button>
                <button type="button" onClick={ () => handleDeleteTodo(todoIndex) } aria-label="Click to delete task">
                    <p>Delete</p>
                </button>
            </div>
        </div>
    );
}
