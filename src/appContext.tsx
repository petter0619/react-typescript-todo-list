import React, { useContext, useReducer, useEffect } from 'react';
// Reducer
import { TodoReducer } from './todoReducer';
// Types
import { TodoType } from './types';
// Helpers
import { addToLocalStorage, getFromLocalStorage } from './utils';

interface ContextType {
    todos: TodoType[];
    dispatch: React.Dispatch<any>;
}

const AppContext = React.createContext<ContextType>({ 
    todos: [],
    dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
    const [todos, dispatch] = useReducer(TodoReducer, []);

    // Lifecycle events
    useEffect(() => {
        const todoSave = getFromLocalStorage('todoSave');
        if (todoSave) dispatch({ type: 'addMultiple', todos: todoSave });
      }, []);

    useEffect(() => {
        addToLocalStorage('todoSave', JSON.stringify(todos));
    }, [todos]);

    // Return
    return (
        <AppContext.Provider value={{ todos, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};
  
export { AppContext, AppProvider };
