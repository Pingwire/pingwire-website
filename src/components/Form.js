import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f9f9f9;
  font-family: 'Roboto Mono';
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 4%;
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  background: rgba(33, 64, 50, 1);
  color: white;
  width: 95%;
  max-width: 400px;

  @media (min-width: 768px) {
    width: 50%;
    padding: 2%;
  }
`;

const StyledLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  width: 100%
`;

const StyledInput = styled.input`
  margin-bottom: 20px;
  padding: 15px 0px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
  font-size: 16px;
  outline: none;
`;

const StyledTextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 15px 0px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
  height: 150px;
  font-size: 16px;
  resize: none;
  outline: none;
`;

const StyledButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: rgba(33, 64, 50, 1);
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  width: 100%;

  &:hover {
    background-color: #ddd;
  }
`;

const Form = () => (
  <Container>
    <StaticImage
      src="../images/Pingwire_logo.png"
      alt="Pingwire logo"
      placeholder="tracedSVG"
      layout="constrained"
    />
    <StyledForm name="contact" method="post" netlify>
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="hidden"
        name="subject"
        value="New lead from %{formName} (%{submissionId})"
      />
      <p>
        <StyledLabel>Your Name:</StyledLabel>
        <StyledInput type="text" name="name" />
      </p>
      <p>
        <StyledLabel>Your Email:</StyledLabel>
        <StyledInput type="email" name="email" />
      </p>
      <p>
        <StyledLabel>Message:</StyledLabel>
        <StyledTextArea name="message" />
      </p>
      <p>
        <StyledButton type="submit">Send</StyledButton>
      </p>
    </StyledForm>
  </Container>
);

export default Form;
