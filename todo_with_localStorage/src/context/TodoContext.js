import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Learn React",
            completed: false,   
        },
    ],
    addToDo: (todo) => {},
    updateTodo: (id, updatedTodo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})




export const useTodo = () => {
    return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider;