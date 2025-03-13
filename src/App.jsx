import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default function App()
{
    const [todos, setTodos] = useState([
        {input: 'Olá! Adicione a sua primeira tarefa!', complete: true}
    ]);
    const [selectedTab, setSelectedTab] = useState('Todas');

    function handleAddTodo(newTodo)
    {
        const newTodoList = [...todos, {input: newTodo, complete: false}];
        setTodos(newTodoList);
        handleSaveData(newTodoList);
    };

    function handleCompleteTodo(index)
    {
        let newTodoList = [...todos];
        let completedTodo = todos[index];
        completedTodo['complete'] = true;
        newTodoList[index] = completedTodo;
        setTodos(newTodoList);
        handleSaveData(newTodoList);
    };

    function handleDeleteTodo(index)
    {
        let newTodoList = todos.filter((_, valueIndex) =>
        {
            return(valueIndex !== index);
        });

        setTodos(newTodoList);
        handleSaveData(newTodoList);
    };

    function handleSaveData(currentTodos)
    {
        localStorage.setItem('todo-app', JSON.stringify({todos: currentTodos}));
    };

    useEffect(() =>
    {
        if (!localStorage || !localStorage.getItem('todo-app'))
        {
            return;
        }

        let db = JSON.parse(localStorage.getItem('todo-app'));
        setTodos(db.todos);

    }, []);

    return(
        <>
            <Header todos={todos}/>
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
            <main>
                <TodoList todos={todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}/>
                <TodoInput handleAddTodo={handleAddTodo}/>
            </main>
        </>
    );
}
