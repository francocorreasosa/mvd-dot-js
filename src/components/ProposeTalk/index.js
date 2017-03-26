import React from 'react';
import './styles.css';

export default (props) => (
  <div className="propose-talk">
    <div className="pt-overlay">
      <h1>Propose a talk!</h1>
      <p>You don't need to be a professional speaker.</p>
      <a
        href="https://www.meetup.com/montevideojs/"
        target="_blank"
      >
        <strong>Send us your talk</strong>
      </a>
    </div>
  </div>
);