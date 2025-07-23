import React from 'react';
import styles from './SubTitle.module.css';

const SectionTitle = ({title}) => (
    <div className={styles.titleWrapper}>
        <h1>{title}</h1>
    </div>
);

export default SectionTitle;