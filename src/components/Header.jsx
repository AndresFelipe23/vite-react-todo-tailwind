import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

// Verifica si el sistema operativo del usuario está en modo oscuro
const isOsDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

// Si el usuario ya ha seleccionado un tema, úsalo, de lo contrario usa el tema del sistema operativo
const inicialStateDarkMode = localStorage.getItem("theme")
    ? localStorage.getItem("theme") === "dark"
    : isOsDarkMode;

const Header = () => {
    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="text-3xl uppercase font-semibold tracking-[0.3em] text-white ">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
