import React from 'react';
import LeaderCard from '../LeaderCard/LeaderCard';
import styles from './Leaders.module.css';

const Leaders = ({ title, members }) => (
  <section className={styles.memberSection}>
    <div className={styles.txtBox2}>
      <h1>{title}</h1>
    </div>
    <div className={styles.leadersGrid}>
      {members.map((m, i) => (
        <LeaderCard key={i} {...m} />
      ))}
    </div>
  </section>
);

export default Leaders;