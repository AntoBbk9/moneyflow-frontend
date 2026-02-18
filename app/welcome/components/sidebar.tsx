import { Link, useLocation } from "react-router";
import { useState } from "react";

// Icônes (exemple SVG) – tu peux remplacer par les tiens
const DashboardIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" d="M3 3h18v18H3z" />
  </svg>
);
const TransactionsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" d="M12 8v8m4-4H8" />
  </svg>
);
const AboutIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <path strokeWidth="2" d="M12 16v.01M12 12v4M12 8h.01" />
  </svg>
);
const SettingsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" d="M12 2v2m0 16v2m10-10h-2M2 12H.01m15.9 7.07l-1.42-1.42M6.52 6.52L5.1 5.1m0 13.86l1.42-1.42M17.48 6.52l1.42-1.42" />
  </svg>
);

export function Sidebar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (b: boolean) => void;
}) {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
    { name: "Transactions", path: "/transactions", icon: <TransactionsIcon /> },
    { name: "About", path: "/about", icon: <AboutIcon /> },
  ];

  return (
    <aside className="flex flex-col justify-between w-64 h-screen p-4 bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
      {/* TOP: Logo + dark/light toggle */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">MoneyFlow</h2>

          {/* Dark / Light toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>



        {/* Navigation */}
        <nav className="flex flex-col gap-3">
          {navItems.map(({ name, path, icon }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800"
                } transition`}
              >
                {icon}
                <span className="font-medium">{name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM: settings */}
      <div className="pt-4">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition"
        >
          <SettingsIcon />
          <span className="font-medium">Settings</span>
        </Link>
      </div>
    </aside>
  );
}
