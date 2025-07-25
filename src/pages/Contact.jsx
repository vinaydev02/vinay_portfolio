import React from 'react';


function Contact() {
  return (
    <section className="container section" id="contact">
      <h2>Contact</h2>
      <form className="contact-form" action="https://formspree.io/f/xwpqlveb" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
