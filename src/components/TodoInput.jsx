import {useState} from 'react';

export default function TodoInput(props)
{
    const {handleAddTodo} = props;
    const [inputValue, setInputValue] = useState('');


    return(
        <div className="input-container">
            <label htmlFor="task-input" className="visually-hidden">Digite para criar tarefa</label>
            <input id="task-input" value={inputValue} onChange={(event) =>
            {
                setInputValue(event.target.value);
            }}
                placeholder="Adicionar Tarefa"/>

            <button type="button" onClick={() =>
            {
               inputValue.trim() && handleAddTodo(inputValue.trim());
               setInputValue('');
            }} aria-label="Clique para adicionar a tarefa">
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}
