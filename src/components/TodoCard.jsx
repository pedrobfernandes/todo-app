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
                } aria-label="Clique para marcar tarefa como concluída">
                    <p>Completa</p>
                </button>
                <button type="button" onClick={ () => handleDeleteTodo(todoIndex) } aria-label="Clique para deletar tarefa">
                    <p>Deletar</p>
                </button>
            </div>
        </div>
    );
}
