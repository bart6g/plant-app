import React from "react";
import { Button, Form } from "./formElements";

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

      <Button>Wyślij</Button>
    </Form>
  );
};

export default ContactForm;
