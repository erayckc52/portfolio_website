import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Contact.module.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// Defining Contact component
const Contact = () => {
  // Store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  // Handling form data to update as user types
  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from input
    setFormData({ ...formData, [name]: value }); // Updating relative field
  };

  // Handling form data to update as user types
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending email to EmailJS
    emailjs
      .send(
        'service_sbo9afb', // EmailJS service ID
        'template_xhczehg', // EmailJS template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        '0Q4cnZKgnikDCZEr4' // EmailJS public API key
      )
      .then(
        (result) => {
          // If successfully sent
          console.log('Message sent:', result.text);
          alert('Message sent successfully!');
          setFormData({ firstName: '', lastName: '', email: '', message: '' });
        },
        // If error with sending email
        (error) => {
          console.error('Error:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    // Main container for contact page
    <div className={styles.contactPage}>
      {/*Email form*/}
      <div className={styles.formContainer}>
        <h2>Contact Me</h2> {/*Section heading*/}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          {/*First name field*/}
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label> {/*Label for input*/}
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange} // update state on change
              required // mandatory input
            />
          </div>
          {/*Last name field*/}
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          {/*Email field*/}
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/*Message textarea*/}
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {/*Submit button*/}
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
      {/*Social media links*/}
      <div className={styles.socialLinks}>
        <a
          href="https://www.linkedin.com/in/eray-cekic-935449253/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} />
          LinkedIn
        </a>
        <a
          href="https://github.com/erayckc52"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.icon} />
          GitHub
        </a>
        <a
          href="https://www.instagram.com/eraycekxc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={styles.icon} />
          Instagram
        </a>
      </div>
    </div>
  );
};
// Exporting Contact component for usage outside
export default Contact;
