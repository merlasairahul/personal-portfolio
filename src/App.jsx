import React, { memo, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Memoize components to prevent unnecessary re-renders
const MemoizedHero = memo(Hero);
const MemoizedAbout = memo(About);
const MemoizedProjects = memo(Projects);
const MemoizedSkills = memo(Skills);
const MemoizedContact = memo(Contact);
const MemoizedFooter = memo(Footer);

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Navigation - semantic nav element used in component */}
      <Navbar />

      {/* Main content area for accessibility */}
      <main id="main-content" role="main">
        {/* Hero Section - contains only h1 */}
        <MemoizedHero />

        {/* Services/About Section */}
        <MemoizedAbout />

        {/* Portfolio Work */}
        <MemoizedProjects />

        {/* Technical Skills */}
        <MemoizedSkills />

        {/* Contact CTA */}
        <MemoizedContact />
      </main>

      {/* Footer with semantic element */}
      <MemoizedFooter />
    </div>
  );
}

export default App;
