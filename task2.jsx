import React, { useState } from 'react'; // Importing React and useState hook for managing component state.
import './App.css'; // Importing CSS file for custom styling.

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(false); // Declares state variable 'sidebarActive' for managing sidebar visibility.

  // Function to toggle the sidebar between active and inactive states.
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    // If sidebarActive is true, apply the "blur" class to blur the background.
    <div className={sidebarActive ? "blur" : ""}> 
      {/* Header section containing the navigation and search bar */}
      <header className="bg-white shadow-md fixed w-full z-10"> 
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            {/* Button to toggle sidebar visibility */}
            <button onClick={toggleSidebar} className="text-2xl text-gray-700 mr-4">
              <i className="fas fa-bars"></i> {/* FontAwesome icon for sidebar toggle */}
            </button>
          </div>
          {/* Navigation links, only visible on medium screens and above */}
          <nav className="hidden md:flex space-x-6">
            <a href="https://animemangatoon.com/category/featured/">Featured</a>
            <a href="https://animemangatoon.com/category/popular-lists/">What to Watch</a>
            <a href="https://animemangatoon.com/category/latest-news-and-reviews/">Latest News and Reviews</a>
          </nav>
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Search..." // Placeholder text for search input
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-500"></i> {/* Search icon */}
          </div>
        </div>
      </header>

      {/* Sidebar section, toggled by sidebarActive state */}
      <aside className={`sidebar ${sidebarActive ? "active" : ""}`} role="complementary">
        <nav>
          {/* Sidebar navigation links */}
          <a href="https://animemangatoon.com/category/featured/" className="nav-link">Featured</a>
          <a href="https://animemangatoon.com/category/popular-lists/" className="nav-link">What to Watch</a>
          <a href="https://animemangatoon.com/category/latest-news-and-reviews/" className="nav-link">Latest News and Reviews</a>
          <a href="#" className="sidebar-link">Contact Us</a>
          <a href="#" className="sidebar-link">Privacy Policy</a>
          <a href="#" className="sidebar-link">About Us</a>
          <a href="#" className="sidebar-link">Fact Checking Policy</a>
          <a href="#" className="sidebar-link">Corrections Policy</a>
          <a href="#" className="sidebar-link">Ethics Policy</a>
          <a href="#" className="sidebar-link">DMCA Take Down Policy</a>
          <a href="#" className="sidebar-link">Editorial Policy</a>
          <a href="#" className="sidebar-link">Censorship Policy</a>
          <a href="#" className="sidebar-link">Terms of Use</a>
        </nav>
      </aside>

      <main>
        {/* Hero section with background image and title */}
        <section className="hero flex items-center justify-center text-white">
          <div className="text-center hero-text">
            <h1 className="text-5xl font-bold mb-4">Lore Olympus Webtoon</h1> {/* Main title */}
            <p className="text-2xl">Jaw Dropping Seen on Media</p> {/* Subtitle */}
          </div>
        </section>

        {/* Main Characters section */}
        <section className="container mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Main Characters</h2> {/* Section heading */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Array of character data rendered as cards */}
            {[
              { name: 'Hades', image: 'https://i.imgur.com/UuZ4Rsm.jpg' },
              { name: 'Persephone', image: 'https://i.imgur.com/6yL4S36.jpg' },
              { name: 'Zeus', image: 'https://i.imgur.com/7LuNLsB.jpg' },
            ].map((character, index) => (
              <div key={index} className="character-card relative">
                <img
                  src={character.image} // Character image
                  alt={`${character.name} image`} // Alternative text
                  className="w-full"
                />
                {/* Overlay for character details on hover */}
                <div className="character-details absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center text-white p-4">
                  <p>{character.name} details...</p> {/* Character details */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Carousel section for manhwa recommendations */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              The 10 Best Supernatural Manhwa You Should Read Now
            </h2> {/* Carousel title */}
            {/* Horizontal scrolling carousel for manhwa */}
            <div className="carousel flex overflow-x-scroll">
              {['Manhwa 1', 'Manhwa 2', 'Manhwa 3'].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md mx-4 p-4 flex-none">
                  <h3 className="text-xl font-bold">{item}</h3> {/* Manhwa title */}
                  <p>Short description...</p> {/* Short description */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App; // Export the App component for rendering in the main application.
