/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 dark:bg-gray-800 ">
                <button
                    className={`${
                        filter === "All"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("All")}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === "Active"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("Active")}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === "Completed"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("Completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
