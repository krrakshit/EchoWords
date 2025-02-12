import React from "react";

interface ThoughtProps {
  text: string;
  author: string;
  createdAt: string;
}

const ThoughtCard: React.FC<ThoughtProps> = ({ text, author, createdAt }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <p className="text-gray-700">{text}</p>
      <div className="text-sm text-gray-500 mt-2">
        - {author || "Anonymous"} | {new Date(createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default ThoughtCard;
