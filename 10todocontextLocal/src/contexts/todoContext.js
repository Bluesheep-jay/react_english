import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoM: "todo message",
            completed: false,
        }, 
    ],
    addTodo: (todoM) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    completeTodo: (id) =>{}
});

export const useTodo = () => {
    return useContext(TodoContext)
};

export const TodoProvider = TodoContext.Provider

