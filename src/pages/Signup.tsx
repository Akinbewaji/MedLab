import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real signup call
    console.log("Signing up", { name, email });
    // stay on auth flow; do not navigate to landing/dashboard here
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-4">Create a Medlab account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full rounded border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded border px-3 py-2"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded">
              Create account
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-sm text-blue-600"
            >
              Have an account?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
