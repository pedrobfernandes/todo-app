import { TodoCard } from "./TodoCard"

export function TodoList(props)
{
    const { selectedTab, todos, handleDeleteTodo, handleCompleteTodo } = props

    const filterTodosList = selectedTab === 'All' ? todos :
        selectedTab === 'Completed' ? todos.filter(value => value.complete) :
        todos.filter(value => !value.complete)

    return(
        <>
            {filterTodosList.map((todo, todoIndex) =>
            {
                return(
                    <TodoCard
                        key={todoIndex}
                        todoIndex={todos.findIndex(value => value.input === todo.input)}
                        handleDeleteTodo={handleDeleteTodo}
                        handleCompleteTodo={handleCompleteTodo}
                        todo={todo}
                    />
                )
            })}
        </>
    )
}
