import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ovhf18c',
        'template_598z26e',
        form.current,
        '6Br1znAz9dfLFAAgt'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-intro">
          Got a question, opportunity, or just want to say hello? I’d love to hear from you.
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="reply_to" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
