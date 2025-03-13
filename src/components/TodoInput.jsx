import {useState} from 'react';

export default function TodoInput(props)
{
    const {handleAddTodo} = props;
    const [inputValue, setInputValue] = useState('');


    return(
        <div className="input-container">
            <label for="task-input" className="visually-hidden">Type to enter or edit a task</label>
            <input id="task-input" value={inputValue} onChange={(event) =>
            {
                setInputValue(event.target.value);
            }}
                placeholder="Add Task"/>

            <button type="button" onClick={() =>
            {
               inputValue.trim() && handleAddTodo(inputValue.trim());
               setInputValue('');
            }} aria-label="Click to add the task">
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}
