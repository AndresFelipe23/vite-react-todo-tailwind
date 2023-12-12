/* eslint-disable no-unused-vars */
import TodoCreated from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

// const initialStateTodos = [
//     { id: 1, title: "Complete online", completed: true },
//     { id: 2, title: "Pick up groceries", completed: false },
//     { id: 3, title: "10 minutos online", completed: true },
//     { id: 4, title: "Complete todo app on  Frontend", completed: false },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            computed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("All");

    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "All":
                return todos;
            case "Active":
                return todos.filter((todo) => !todo.completed);
            case "Completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]  md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] ">
                <Header />

                <main className="container rounded-md mx-auto mt-8 px-4 md:max-w-xl">
                    <TodoCreated createTodo={createTodo} />

                    <TodoList
                        todos={filteredTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />

                    <TodoComputed
                        computedItemsLeft={computedItemsLeft}
                        clearCompleted={clearCompleted}
                    />

                    <TodoFilter changeFilter={changeFilter} filter={filter} />
                </main>

                <footer className="text-center mt-8 mb-4 dark:text-gray-400">
                    By Andres Espitia
                </footer>
            </div>
        </>
    );
};

export default App;
