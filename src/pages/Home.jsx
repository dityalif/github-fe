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
      description: "Work together with your team on a single platform to build and ship software faster.",
      buttonText: "Learn More",
    },
    {
      imageSrc: "/img/Plan.png",
      title: "Plan",
      description: "Organize your projects and track progress with powerful planning tools.",
      buttonText: "Get Started",
    },
    {
      imageSrc: "/img/Code.png",
      title: "Code",
      description: "Write better code with AI-powered suggestions and code reviews.",
      buttonText: "Explore",
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
      description: "Keep your code secure with advanced security features.",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="text-white min-h-screen flex flex-col items-center bg-gradient-to-bl from-[#161B22] via-[#161B22] to-[#4682B4]">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-grow w-full text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Build and ship software on a single, collaborative platform
        </h1>
        <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          Join the world’s most widely adopted AI-powered developer platform.
        </p>
        <div className="w-full flex justify-center mt-10">
          <SearchBar placeholder="Explore more..." onSearch={handleSearch} />
        </div>
      </header>

      {/* Card Section */}
      <main className="flex flex-col items-center w-full px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-7xl">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              onButtonClick={() => handleCardButtonClick(card.title)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 mt-16">
        <p className="text-sm text-gray-400">&copy; 2025 GitHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
