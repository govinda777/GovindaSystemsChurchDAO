"use client";
import { usePrivy } from "@privy-io/react-auth";

export default function LoginButton() {
  const { ready, authenticated, login, logout } = usePrivy();

  // Wait until the Privy client is ready before showing the login button
  if (!ready) {
    return null;
  }

  return (
    <div>
      {ready && authenticated ? (
        <button
          onClick={logout}
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={login}
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login
        </button>
      )}
    </div>
  );
}