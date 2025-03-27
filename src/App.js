import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GuidesSection from './components/GuidesSection';
import AnimalRightsSection from './components/AnimalRightsSection';
import InteractiveToolsSection from './components/InteractiveToolsSection';
import EcoTipsSection from './components/EcoTipsSection';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <GuidesSection />
            <AnimalRightsSection />
            <InteractiveToolsSection />  
            <EcoTipsSection />
        </div>
    );
}

export default App;
