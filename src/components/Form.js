/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import React from 'react';
import '../styles.css';

const Form = () => (
  <div className="container">
    <Link to="/">
      <StaticImage
        src="../images/Pingwire_logo.png"
        alt="Pingwire logo"
        placeholder="tracedSVG"
        layout="constrained"
      />
    </Link>
    <form className="styled-form" name="contact" method="post" data-netlify="true" action="/thank-you">
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="hidden"
        name="subject"
        value="New lead"
      />
      <p>
        <label className="styled-label">Your Name:</label>
        <input className="styled-input" type="text" name="name" />
      </p>
      <p>
        <label className="styled-label">Your Email:</label>
        <input className="styled-input" type="email" name="email" />
      </p>
      <p>
        <label className="styled-label">Message:</label>
        <textarea className="styled-textarea" name="message" />
      </p>
      <p>
        <button className="styled-button" type="submit">Send</button>
      </p>
    </form>
  </div>
);

export default Form;
