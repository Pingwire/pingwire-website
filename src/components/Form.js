/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import '../styles.css';
import styled from 'styled-components';

const StyledHeader = styled('h1')`
  color: rgba(33, 64, 50, 1);
  font-size:48px;
  margin: 0;
  text-align: center;
  font-family: Roboto Mono;
`;

const StyledSubHeader = styled('h2')`
  color: rgba(33, 64, 50, 1);
  font-size:16px;
  margin: 0;
  text-align: center;
  font-family: Roboto Mono;
`;

const Form = () => (
  <div className="container">
    <StyledHeader>Contact Us</StyledHeader>
    <StyledSubHeader>Please send us a message and we’ll get back to you as soon as we can</StyledSubHeader>
    <form
      className="styled-form"
      name="contact"
      method="post"
      data-netlify="true"
      action="/thank-you"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="hidden"
        name="subject"
        value="New lead"
      />
      <p hidden>
        <label hidden>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <p>
        <label className="styled-label">Your Name:</label>
        <input required className="styled-input" type="text" name="name" />
      </p>
      <p>
        <label className="styled-label">Company Name (optional):</label>
        <input className="styled-input" type="text" name="companyName" />
      </p>
      <p>
        <label className="styled-label">Your Email:</label>
        <input required className="styled-input" type="email" name="email" />
      </p>
      <p>
        <label className="styled-label">Phone number (optional):</label>
        <input className="styled-input" type="text" name="phoneNumber" />
      </p>
      <p className="full-size-paragraph">
        <label className="styled-label">Message:</label>
        <textarea required className="styled-textarea" name="message" />
      </p>
      <p className="full-size-paragraph">
        <button className="styled-button" type="submit">Contact Us</button>
      </p>
    </form>
  </div>
);

export default Form;
