"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "Something went wrong");
      return;
    }

    // Store JWT token in localStorage or cookies
    localStorage.setItem("token", data.token);

    // Redirect to homepage or dashboard
    router.push("/dashboard");
  };

  return (
    <div>
        <Header/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Signin</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <form onSubmit={handleSignin}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-3 border rounded text-black placeholder-gray-800"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded text-black placeholder-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          <button type="submit" className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">
            Signin
          </button>
        </form>
        <p className="text-sm text-center mt-3 text-black">
          Dont have an account? <a href="/signup" className="text-blue-500">Signup</a>
        </p>
      </div>
    </div>
    <Footer/>
            </div>
  );
}
