import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-lightBlack">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <section className="w-full max-w-4xl">
          <h2 className="text-4xl font-bold text-black">Express Your Thoughts in 60 Words</h2>
          <p className="mt-3 text-gray-600">A simple, clean platform to share and revisit your thoughts.</p>
          <div className="mt-6">
            <Link href="/signup" className="bg-gray-900 text-white px-6 py-3 rounded-md mr-4 shadow hover:bg-gray-900 transition">
              Get Started
            </Link>
            <Link href="/signin" className="border border-lightBlack bg-gray-900  px-6 py-3 rounded-md shadow  transition">
              Sign In
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-16 w-full max-w-4xl">
          <h3 className="text-2xl font-semibold text-black">Why Use Our Platform?</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-300 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-gray-900">Minimal & Fast</h4>
              <p className="text-gray-600 mt-2">A clean UI with a smooth user experience.</p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-gray-900">Revisit Thoughts</h4>
              <p className="text-gray-600 mt-2">Easily access and edit your previous thoughts.</p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-gray-900">Privacy Focused</h4>
              <p className="text-gray-600 mt-2">Your thoughts remain yours, with full control.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
