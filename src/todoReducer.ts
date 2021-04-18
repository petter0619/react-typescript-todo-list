import { TodoType } from './types';

type Actions = 
	| { type: 'add'; text: string }
	| { type: 'delete'; idx: number }
    | { type: 'toggleIsDone'; idx: number; bool: boolean }
    | { type: 'addMultiple'; todos: TodoType[] };

type State = TodoType[];

export const TodoReducer = ( state: State, action: Actions ) => {
    const stateCopy = [...state];
    switch (action.type) {
        case 'add':
            stateCopy.push({ text: action.text, isDone: false });
            return stateCopy;
        case 'delete':
            stateCopy.splice(action.idx, 1);
            return stateCopy;
        case 'toggleIsDone':
            stateCopy[action.idx].isDone = action.bool;
            return stateCopy;
        case 'addMultiple':
            return [...stateCopy, ...action.todos];
        default:
            return state
    }
};
