import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-lightBlack text-center p-4 mt-10 border-t border-gray-200">
      <p>© 2025 Thought Sharing App</p>
      <div className="mt-3 space-x-4">
        <Link href="/privacy" className="text-gray-500 hover:text-gray-700">Privacy Policy</Link>
        <Link href="/terms" className="text-gray-500 hover:text-gray-700">Terms of Use</Link>
      </div>
    </footer>
  );
}
