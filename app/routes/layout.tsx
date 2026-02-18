import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { Sidebar } from "~/welcome/components/sidebar";

export default function RootLayout() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Apply theme and save
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
    <div className="flex">
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Page content */}
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <Outlet />
      </main>
    </div>
  );
}
