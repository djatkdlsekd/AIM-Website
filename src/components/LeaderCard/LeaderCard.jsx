import React from 'react';
import styles from './LeaderCard.module.css';

const LeaderCard = ({ name, role, imgSrc, profileUrl }) => (
  <a href={profileUrl} className={styles.card}>
    <img src={imgSrc} alt={`${name} profile`} />
    <h3>{role}</h3>
    <p>{name}</p>
  </a>
);

export default LeaderCard;