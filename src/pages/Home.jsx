import React from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

function App() {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  const handleCardButtonClick = (title) => {
    console.log(`${title} button clicked!`);
  };

  const cardsData = [
    {
      imageSrc: "/img/Collab.png",
      title: "Collaborate",
      description: "Work together with your team on a single platform to build software faster.",
      buttonText: "Try Now",
    },
    {
      imageSrc: "/img/Plan.png",
      title: "Plan",
      description: "Organize your projects and track progress with powerful planning tools.",
      buttonText: "Try Now",
    },
    {
      imageSrc: "/img/Code.png",
      title: "Code",
      description: "Write better code with AI-powered suggestions and code reviews.",
      buttonText: "Try Now",
    },
    {
      imageSrc: "/img/Automate.png",
      title: "Automate",
      description: "Automate workflows to save time and reduce manual effort.",
      buttonText: "Try Now",
    },
    {
      imageSrc: "/img/Secure.png",
      title: "Secure",
      description: "Keep your code secure with many advanced security features.",
      buttonText: "Try Now",
    },
  ];

  return (
    <div className="text-white min-h-screen flex flex-col items-center bg-gradient-to-bl from-[#161B22] via-[#161B22] to-[#4682B4]">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-grow w-full text-center py-20 px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Build and ship software on a single, collaborative platform
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-6 max-w-2xl mx-auto">
          Join the world’s most widely adopted AI-powered developer platform.
        </p>
        <div className="w-full flex justify-center mt-10 px-4">
          <SearchBar placeholder="Explore more..." onSearch={handleSearch} />
        </div>
      </header>

      {/* Card Section */}
      <main className="flex flex-col items-center w-full px-4 mx-auto mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-3/4 mx-auto lg:w-auto" 
            >
              <Card
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                onButtonClick={() => handleCardButtonClick(card.title)}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 mt-16">
        <p className="text-sm text-gray-400">&copy; 2025 GitHub. All rights reserved. Created by Ditya</p>
      </footer>
    </div>
  );
}

export default App;
