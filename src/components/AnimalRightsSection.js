import React from 'react';
import './AnimalRightsSection.css';
import animalRightsImg from '../assets/img6.jpg'; 

const AnimalRightsSection = () => {
    return (
        <section className="animal-rights">
            <div className="text-content">
                <h2>Understanding Animal Rights</h2>
                <p>
                    Animals deserve to live free from suffering and exploitation.
                    Understanding their rights is the first step toward protecting them.
                    This section provides key insights into animal rights, current laws,
                    and how you can help advocate for a more compassionate world.
                </p>
                <button className="download-btn">Download our complete guide in PDF</button>
            </div>
            <div className="image-container">
                <img src={animalRightsImg} alt="Sea Lion" />
            </div>
        </section>
    );
};

export default AnimalRightsSection;
