"use client";

import { useState, useEffect } from "react";
import ThoughtCard from "../components/Thoughtcard";
import AddThoughtModal from "../components/ThoughtModal";

interface Thought {
  id: string;
  text: string;
  author: { name: string };
  createdAt: string;
}

export default function Dashboard() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThoughts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/thoughts");
        const data = await response.json();
        setThoughts(data);
      } catch (error) {
        console.error("Error fetching thoughts:", error);
      }
      setLoading(false);
    };

    fetchThoughts();
  }, []);

  const addThought = async (text: string) => {
    const token = localStorage.getItem("token");
    const response = await fetch("/api/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text }),
    });

    if (response.ok) {
      const newThought = await response.json();
      setThoughts((prev) => [newThought, ...prev]);
    } else {
      alert("Failed to add thought");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Your Thoughts</h1>
          <button
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            onClick={() => setShowModal(true)}
          >
            Add Thought
          </button>
        </div>

        {loading ? (
          <div className="space-y-4">
            <div className="h-16 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-16 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-16 bg-gray-200 animate-pulse rounded"></div>
          </div>
        ) : thoughts.length === 0 ? (
          <p className="text-gray-500">No thoughts yet. Add one!</p>
        ) : (
          <div className="space-y-4">
            {thoughts.map((thought) => (
              <ThoughtCard key={thought.id} text={thought.text} author={thought.author.name} createdAt={thought.createdAt} />
            ))}
          </div>
        )}
      </div>

      {showModal && <AddThoughtModal onClose={() => setShowModal(false)} onAdd={addThought} />}
    </div>
  );
}
