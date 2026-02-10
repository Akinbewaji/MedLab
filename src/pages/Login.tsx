import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real auth call
    console.log("Logging in", { email });
    // stay on auth flow; do not navigate to landing/dashboard here
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-4">Sign in to Medlab</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded">
              Sign in
            </button>
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-sm text-blue-600"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
