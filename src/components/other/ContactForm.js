import React from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 500px;

  label {
    width: 100%;
    display: flex;
    position: relative;
    /* align-items: center; */
    margin: 25px 0;
    span {
      position: absolute;
      display: block;
      top: 13px;
      left: 10px;
      pointer-events: none;
      transition: all 0.3s ease;
    }
    input,
    textarea {
      width: 100%;
      height: 50px;
      padding-left: 10px;
      border: none;
      outline: none;

      &:focus,
      &:valid {
        border: 1px solid black;
      }
    }
    input:focus,
    input:valid,
    textarea:focus,
    textarea:valid {
      + .placeholder {
        top: -12px;
        display: block;
        font-weight: 600;
        font-size: 12px;
        background-color: white;
        padding: 0 10px;
        border: 1px solid black;
      }
    }
    textarea {
      height: 150px;
      padding-top: 20px;
    }
  }
`;

const ContactForm = () => {
  return (
    <Form>
      <h3>lub napisz do nas!</h3>

      <label>
        <input type="text" required />
        <span className="placeholder">Imie i nazwisko</span>
      </label>
      <label>
        <input type="text" required />
        <span className="placeholder">Email</span>
      </label>

      <label>
        <textarea required></textarea>
        <span className="placeholder">Twoja wiadomość</span>
      </label>
    </Form>
  );
};

export default ContactForm;
