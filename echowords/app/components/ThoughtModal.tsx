"use client";

import { useState } from "react";

interface AddThoughtModalProps {
  onClose: () => void;
  onAdd: (text: string) => void;
}

const AddThoughtModal: React.FC<AddThoughtModalProps> = ({ onClose, onAdd }) => {
  const [thought, setThought] = useState("");

  const handleSubmit = async () => {
    if (thought.trim().length > 60) {
      alert("Thought must be under 60 words");
      return;
    }

    onAdd(thought);
    setThought("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-3 text-black">Add Thought</h2>
        <textarea
          className="w-full p-2 border rounded placeholder-gray-800 text-black"
          rows={3}
          placeholder="Share your thought (max 60 words)"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button className="mr-2 px-4 py-2 bg-gray-900 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-black text-white rounded" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddThoughtModal;
