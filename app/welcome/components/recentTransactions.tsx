interface Transaction {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
}

const transactions: Transaction[] = [
  { id: 1, date: "2026-02-01", description: "Salary", category: "Salary", amount: 3200, type: "income" },
  { id: 2, date: "2026-02-03", description: "Groceries", category: "Food", amount: 120, type: "expense" },
  { id: 3, date: "2026-02-05", description: "Uber", category: "Transport", amount: 15, type: "expense" },
  { id: 4, date: "2026-02-10", description: "Freelance", category: "Work", amount: 500, type: "income" },
];

export default function RecentTransactions() {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4 text-gray-800 dark:text-white">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-left">
              <th className="px-4 py-2 text-gray-600 dark:text-gray-300">Date</th>
              <th className="px-4 py-2 text-gray-600 dark:text-gray-300">Description</th>
              <th className="px-4 py-2 text-gray-600 dark:text-gray-300">Category</th>
              <th className="px-4 py-2 text-gray-600 dark:text-gray-300">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 text-gray-700 dark:text-gray-200">{tx.date}</td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-200">{tx.description}</td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-200">{tx.category}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    tx.type === "income" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {tx.type === "income" ? "+" : "-"}${tx.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
