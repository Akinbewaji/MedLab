import { useNavigate } from "react-router-dom";

export default function LogoutConfirm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-lg shadow p-6 text-center">
        <h1 className="text-2xl font-semibold mb-2">Signed out</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          You have been signed out of Medlab.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
