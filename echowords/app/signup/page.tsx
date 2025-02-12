"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", username: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-lightBlack">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <h2 className="text-2xl font-semibold text-black">Create an Account</h2>
        <p className="text-gray-500 mt-1">Join us and start sharing your thoughts!</p>

        <form onSubmit={handleSubmit} className="mt-6 w-80 bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            onChange={handleChange}
            required
          />
          <button type="submit" className="bg-gray-900 text-white w-full p-2 rounded-md shadow-sm mt-4 hover:bg-gray-700 transition">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-gray-800">
          Already have an account? 
          <a href="/signin" className="text-lightBlack hover:underline ml-1">Sign In</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
