/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import '../styles.css';

const Form = () => (
  <div className="container">
    <StaticImage
      src="../images/Pingwire_logo.png"
      alt="Pingwire logo"
      placeholder="tracedSVG"
      layout="constrained"
    />
    <form className="styled-form" name="contact" method="post" data-netlify="true" data-netlify-recaptcha="true">
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="hidden"
        name="subject"
        value="New lead from %{formName} (%{submissionId})"
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
      <div data-netlify-recaptcha="true" />
      <p>
        <button className="styled-button" type="submit">Send</button>
      </p>
    </form>
  </div>
);

export default Form;
