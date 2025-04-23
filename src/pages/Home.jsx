import React from "react";
import SearchBar from "../components/SearchBar";

function App() {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center bg-gradient-to-bl from-[#161B22] via-[#161B22] to-[#4682B4]">
      {/* Header */}
      <header className="w-full text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Build and ship software on a single, collaborative platform
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full px-4">
        <div className="text-center max-w-2xl mb-8">
          <p className="text-lg md:text-xl mb-6">
            Join the world’s most widely adopted AI-powered developer platform.
          </p>
        </div>
        <SearchBar placeholder="Search or Jump To" onSearch={handleSearch} />
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 mt-auto">
        <p className="text-sm text-gray-400">&copy; 2025 GitHub Clone. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
