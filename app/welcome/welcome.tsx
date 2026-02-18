import { useState, useEffect } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Sidebar } from "./components/sidebar";
import { Outlet } from "react-router";

export function Welcome() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    // <main className={`flex items-center justify-center min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>
    //   <div className="flex flex-col items-center gap-8">
    //     <img
    //       src={darkMode ? logoDark : logoLight}
    //       alt="Logo"
    //       className="w-64"
    //     />
    //     <button
    //       onClick={() => setDarkMode(!darkMode)}
    //       className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    //     >
    //       {darkMode ? "Switch to Light" : "Switch to Dark"}
    //     </button>
    //   </div>
    // </main>
    <div className="flex">
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Page content */}
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <Outlet />
      </main>
    </div>
  );
}
