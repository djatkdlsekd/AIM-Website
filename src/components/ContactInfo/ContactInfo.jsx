import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = ({ phone, email }) => (
    <div className={styles.info}>
        <div className={styles.item}>
        <i className="fa fa-phone"></i> <span>{phone}</span>
        </div>
        <div className={styles.item}>
        <i className="fa fa-envelope"></i> <span>{email}</span>
        </div>
    </div>
);

export default ContactInfo;