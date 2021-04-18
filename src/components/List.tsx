import React from 'react';
// Components
import TodoItem from './TodoItem';
// Types
import { TodoType } from '../types';

interface Props {
    todoArray: TodoType[];
}

const List: React.FC<Props> = ({ todoArray }) => {
    const pendingTodos = todoArray.filter(todo => !todo.isDone).length;
    const completeTodos = todoArray.filter(todo => todo.isDone).length;

    return (
        <ul className="list">
            {todoArray.length > 0 && <h3 className="list__title list__title--pending">Pending: {pendingTodos}</h3>}
            {todoArray.length > 0 && <h3 className="list__title list__title--done">Done: {completeTodos}</h3>}
            {todoArray.map((todo, index) => <TodoItem
                key={index}
                todo={todo}
                idx={index}
            />)}
      </ul>
    )
}

export default List;
