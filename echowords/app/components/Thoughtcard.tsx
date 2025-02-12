import React from "react";

interface ThoughtCardProps {
  text: string;
  author: string | null; // Handle cases where author might be null
  createdAt: string;
}

const ThoughtCard: React.FC<ThoughtCardProps> = ({ text, author, createdAt }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 transition duration-300 hover:shadow-lg">
      <p className="text-gray-800 text-lg font-medium">{text}</p>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <p className="font-semibold">{author ?? "Anonymous"}</p>
        <p>{new Date(createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ThoughtCard;
