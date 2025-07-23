import React from 'react';
import styles from './LinkList.module.css';

const LinkList = ({ heading, items}) => (
    <div className={styles.block}>
        <h2>{heading}</h2>
        {items.map((item, idx) => (
            <div key ={idx} className={styles.item}>
                <a href={item.href}>{item.label}</a>
                </div>
        ))}
    </div>
);

export default LinkList;