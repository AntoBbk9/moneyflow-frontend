import { useState, useEffect } from "react";
import DashboardChart from "./components/dashboardChart";
import RecentTransactions from "./components/recentTransactions";
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
    <div className="">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1> 

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
          <p className="text-gray-500">Total Balance</p>
          <h2 className="text-xl font-bold">$2,450</h2>
        </div>

        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
          <p className="text-gray-500">Income</p>
          <h2 className="text-xl font-bold text-green-500">$3,200</h2>
        </div>

        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
          <p className="text-gray-500">Expenses</p>
          <h2 className="text-xl font-bold text-red-500">$750</h2>
        </div>

        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
          <p className="text-gray-500">Savings</p>
          <h2 className="text-xl font-bold">$1,700</h2>
        </div>
 
       </div> 

      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow h-72 mt-3 w-full">
        <DashboardChart />
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow mt-3">
        <RecentTransactions />
      </div> 

    </div>
  );
}