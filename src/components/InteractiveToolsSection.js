import React from 'react';
import './InteractiveToolsSection.css';

const InteractiveToolsSection = () => {
    return (
        <section className="interactive-tools">
            <div className="tools-text">
                <h2>Interactive Tools</h2>
                <p>
                    Learning about animal protection and environmental sustainability should be engaging and interactive! 
                    Explore our tools below to test your knowledge, track your impact, and discover ways to make a difference.
                </p>
                <button className="learn-more-btn">Learn more</button>
            </div>
            <div className="tools-list">
                <ul>
                    <li>Start the Quiz Now!</li>
                    <li>Try the Simulator!</li>
                    <li>Calculate Your Carbon Footprint</li>
                    <li>Play Now!</li>
                    <li>Explore More Ways to Help!</li>
                    <li>View the Map</li>
                </ul>
                <button className="full-schedule-btn">VIEW FULL SCHEDULE</button>
            </div>
        </section>
    );
};

export default InteractiveToolsSection;
