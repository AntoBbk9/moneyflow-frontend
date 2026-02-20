import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { Sidebar } from "~/welcome/components/sidebar";

export default function RootLayout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
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
    <div className="flex min-h-screen">
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-1 ml-64 p-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <Outlet />
      </main>
    </div>
  );
}
