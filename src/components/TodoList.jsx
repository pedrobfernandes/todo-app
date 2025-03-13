import TodoCard from './TodoCard';

export default function TodoList(props)
{
    const {todos, selectedTab, handleDeleteTodo, handleCompleteTodo} = props;

    const filterTodoList = selectedTab === 'Todas' ?
        todos :
        selectedTab === 'Completadas' ?
            todos.filter(value => value.complete) :
            todos.filter(value => !value.complete);

    return(
        <>
            {filterTodoList.map( (todo, todoIndex) =>
            {
                const originalIndex = todos.findIndex(item => item === todo);

                return(

                    <TodoCard
                        key={todoIndex}
                        todo={todo}
                        todoIndex={originalIndex}
                        handleDeleteTodo={handleDeleteTodo}
                        handleCompleteTodo={handleCompleteTodo}
                    />

                );
            } )}
        </>
    );
}
