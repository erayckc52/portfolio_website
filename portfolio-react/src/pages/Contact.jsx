import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Contact.module.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_sbo9afb',
        'template_xhczehg',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        '0Q4cnZKgnikDCZEr4'
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          alert('Message sent successfully!');
          setFormData({ firstName: '', lastName: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div className={styles.contactPage}>
      {/*Email form*/}
      <div className={styles.formContainer}>
        <h2>Contact Me</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
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

export default Contact;
