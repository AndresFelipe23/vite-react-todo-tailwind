/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const TodoCreated = ({ createTodo }) => {
    const [title, setTitle] = useState("");
    const handleSubmitAddTodo = (e) => {
        e.preventDefault();

        if (!title) {
            return setTitle("");
        }

        createTodo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="flex dark:bg-gray-800 items-center gap-4 overflow-hidden bg-white rounded-md py-4 px-4 mt-8"
        >
            <span className="inline-block  h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none dark:bg-gray-800"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreated;
