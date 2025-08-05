import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'; // ✅ Importa lo stile

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    ).then(
      () => {
        alert('Messaggio inviato con successo!');
        form.current.reset();
      },
      () => {
        alert('Errore nell’invio. Riprova.');
      }
    );
  };

  return (
    <div className="contact-form-wrapper">
    <h2 className="contact-form-title">Scrivici un messaggio per saperne di più</h2>
    <p className="contact-form-subtitle">
      Hai domande o richieste? Compila il modulo e ti risponderemo al più presto.
    </p>
  
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <input type="text" name="user_name" placeholder="Nome" required />
      <input type="email" name="user_email" placeholder="Email" required />
      <textarea name="message" placeholder="Il tuo messaggio" required />
      <button type="submit">Invia</button>
    </form>
  </div>
  
  
  );
};

export default ContactForm;
