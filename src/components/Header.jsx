export default function Header(props)
{
    const {todos} = props;
    const todosLength = todos.length;
    const isTasksPlural = todos.length !== 1;

    return(
        <header>
            <h1 className="text-gradient">Você tem {todosLength} {isTasksPlural ? 'tarefas em aberto' : 'tarefa em aberto'}.</h1>
        </header>
    );
}
