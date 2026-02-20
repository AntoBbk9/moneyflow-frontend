import { useState } from "react";

const initialTransactions = [
  { id: 1, date: "2026-02-01", type: "Income", category: "Salary", amount: 3000 },
  { id: 2, date: "2026-02-03", type: "Expense", category: "Food", amount: 50 },
  { id: 3, date: "2026-02-05", type: "Expense", category: "Transport", amount: 20 },
];

export default function Transactions() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [form, setForm] = useState({ date: "", type: "Income", category: "", amount: "" });
  const [filter, setFilter] = useState({ type: "All" });
  const [editingId, setEditingId] = useState<number | null>(null); // pour update

  const handleAddOrUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const txData = {
      id: editingId ?? transactions.length + 1,
      date: form.date,
      type: form.type,
      category: form.category,
      amount: Number(form.amount),
    };

    if (editingId) {
      // Update
      setTransactions(transactions.map(tx => (tx.id === editingId ? txData : tx)));
      setEditingId(null);
    } else {
      // Add
      setTransactions([txData, ...transactions]);
    }

    setForm({ date: "", type: "Income", category: "", amount: "" });
  };

  const handleEdit = (txId: number) => {
    const tx = transactions.find(t => t.id === txId);
    if (tx) {
      setForm({ date: tx.date, type: tx.type, category: tx.category, amount: tx.amount.toString() });
      setEditingId(tx.id);
    }
  };

  const handleDelete = (txId: number) => {
    setTransactions(transactions.filter(tx => tx.id !== txId));
    if (editingId === txId) {
      setEditingId(null);
      setForm({ date: "", type: "Income", category: "", amount: "" });
    }
  };

  const filteredTransactions = transactions.filter(tx =>
    filter.type === "All" ? true : tx.type === filter.type
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Transactions</h1>

      <form onSubmit={handleAddOrUpdate} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow space-y-4">
        <h2 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
          {editingId ? "Update Transaction" : "Add Transaction"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input 
            type="date"
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })}
            className="p-2 border rounded-md w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
          <select
            value={form.type}
            onChange={e => setForm({ ...form, type: e.target.value })}
            className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            <option>Income</option>
            <option>Expense</option>
          </select>
          <input 
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
            className="p-2 border rounded-md w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
          <input 
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={e => setForm({ ...form, amount: e.target.value })}
            className="p-2 border rounded-md w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      {/* Filter */}
      <div className="flex items-center gap-4">
        <label className="text-gray-700 dark:text-gray-200">Filter by type:</label>
        <select
          value={filter.type}
          onChange={e => setFilter({ type: e.target.value })}
          className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
          <option>All</option>
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
          <p className="text-gray-500">Total Income</p>
          <h2 className="text-xl font-bold text-green-500">
            ${transactions.filter(tx => tx.type === "Income").reduce((a,b) => a + b.amount, 0)}
          </h2>
        </div>
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
          <p className="text-gray-500">Total Expenses</p>
          <h2 className="text-xl font-bold text-red-500">
            ${transactions.filter(tx => tx.type === "Expense").reduce((a,b) => a + b.amount, 0)}
          </h2>
        </div>
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
          <p className="text-gray-500">Balance</p>
          <h2 className="text-xl font-bold">
            ${transactions.reduce((acc, tx) => tx.type === "Income" ? acc + tx.amount : acc - tx.amount, 0)}
          </h2>
        </div>
      </div>

      {/* Tableau */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2 border-b">Date</th>
              <th className="p-2 border-b">Type</th>
              <th className="p-2 border-b">Category</th>
              <th className="p-2 border-b">Amount</th>
              <th className="p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map(tx => (
              <tr key={tx.id}>
                <td className="p-2 border-b">{tx.date}</td>
                <td className="p-2 border-b">{tx.type}</td>
                <td className="p-2 border-b">{tx.category}</td>
                <td className="p-2 border-b">{tx.amount}</td>
                <td className="p-2 border-b flex gap-2">
                  <button 
                    onClick={() => handleEdit(tx.id)}
                    className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(tx.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
