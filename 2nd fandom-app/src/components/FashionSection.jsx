import React from 'react';
import FashionCard from './FashionCard';
import './FashionSection.css';

const FashionSection = ({ title, cards }) => {
  return (
    <section className="fashion-section">
      {title && <h3 className="section-title">{title}</h3>}
      <div className="card-scroll">
        {cards.map((card, index) => (
          <FashionCard
            key={index}
            image={card.image}
            title={card.title}
            tag={card.tag}
            subImages={card.subImages}
            index={`${index + 1}/${cards.length}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FashionSection;
