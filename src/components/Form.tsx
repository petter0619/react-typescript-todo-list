import React from 'react';
import { useGlobalContext } from '../appContext';

const Form: React.FC = () => {
    const { dispatch } = useGlobalContext();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const newTodoText = e.currentTarget.todo.value.toString();
        dispatch({ type: 'add', text: newTodoText });

        e.currentTarget.reset();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="form__input"
                type="text"
                name="todo"
                id="todo"
                placeholder="Type your todo here"
                required
            />
            <button className="form__submit" type="submit">Add Todo</button>
        </form>
    )
}

export default Form;
