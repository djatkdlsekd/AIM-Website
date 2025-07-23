import React from 'react';
import EventCard from '../EventCard/EventCard';
import styles from './EventList.module.css';

const EventList = ({events}) => (
    <div className={styles.wrapper}>{events.map((e, i) => <EventCard key ={i} {...e}/>)}
    </div>
);

export default EventList;