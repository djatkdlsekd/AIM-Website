import React from 'react';
import styles from './SubHeader.module.css';

const SubHeader = ({ title }) => (
    <div className={styles.subHeader}>
        <div className={styles.txtBox}>
            <h1>{title}</h1>
        </div>
    </div>
);

export default SubHeader;