import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './Contact.module.css';
const Contact = () => (
  <>
    <SubHeader title="Contact" />
    <div className={styles.contact}>
      <div className={styles.row}>
        <div className={styles.contactCol}>
          <ContactInfo phone="+1 447 902 6627" email="aimpartnersuiuc@gmail.com" />
        </div>
        <div className={styles.contactCol}>
          <ContactForm />
        </div>
      </div>
    </div>
  </>
);

export default Contact;

