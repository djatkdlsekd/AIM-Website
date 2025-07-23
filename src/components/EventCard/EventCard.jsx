import React from 'react';
import styles from './EventCard.module.css';

const EventCard = ({ dateTime, displaydate, title, desc, location, locHref }) => (
    <article className={styles.card}>
        <time datetime={dateTime} className={styles.date}>
            {displaydate}
        </time>
        <h3 className={styles.heading}>{title}</h3>
        <p classNmae={styles.description}>{desc}</p>
        {locHref ? <a href={locHref} className={styles.locationBtn}>{location}</a>
        : <address className={styles.location}>{location}</address>}
    </article>
);

export default EventCard;