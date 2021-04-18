import React from 'react';
import { useGlobalContext } from '../appContext';
// Types
import { TodoType } from '../types';

interface Props {
    todo: TodoType;
    idx: number;
}

const TodoItem: React.FC<Props> = ({ todo, idx }) => {
    const { dispatch } = useGlobalContext();
    
    const handleClick = (e: React.MouseEvent) => {
        dispatch({ type: 'delete', idx });
    };

    const handleChange = (e: React.ChangeEvent) => {
        dispatch({ type: 'toggleIsDone', idx, bool: !todo.isDone });
    };

    const { isDone, text } = todo;

    return (
        <li className={isDone ? 'list-item list-item--done' : 'list-item list-item--pending'}>
            <input
                className='list-item__checkbox'
                type="checkbox" id={`item${idx}`}
                data-todoid={idx}
                checked={isDone}
                onChange={handleChange}
            />
            <label
                className={isDone ? 'list-item__label list-item__label--done' : 'list-item__label'}
                htmlFor={`item${idx}`}
            >{text}</label>
            {isDone && <button
                className="list-item__delete-btn"
                data-todoid={idx}
                onClick={handleClick}
            >X</button>}
        </li>
    )
}

export default TodoItem;
