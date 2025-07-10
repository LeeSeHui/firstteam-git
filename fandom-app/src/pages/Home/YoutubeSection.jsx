import React from 'react';
import './YoutubeSection.css';

const YoutubeSection = () => {
  return (
    <section className="youtube-section">
      <a
        href="https://www.youtube.com/watch?v=lmJPeFW75qQ&list=RDlmJPeFW75qQ&start_radio=1"
        target="_blank"
        rel="noopener noreferrer"
        className="youtube-link"
      >
        <h2>유튜브 연결</h2>
      </a>
    </section>
  );
};

export default YoutubeSection;