/* 나고 */
import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = ({ imgSrc, heading, paragraphs, cta }) => (
  <section className={styles.aboutUs}>
    <div className={styles.row}>
      <div className={styles.abtCol}>
        <img src={imgSrc} alt={`${heading} logo`} />
      </div>
      <div className={styles.abtCol}>
        <h1>{heading}</h1>
        {paragraphs.map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;