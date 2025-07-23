import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => (
    <form className={styles.form} action="form.php" method="post">
        <input type="text" name="name" placeholder="Enter your name" required />
            <input type="email" name="email" placeholder="Enter Email address" required />
            <input type="text" name="subject" placeholder="Enter your subject" required />
            <textarea rows={8} name="message" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
    </form>
);

export default ContactForm;
