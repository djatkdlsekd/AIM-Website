import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import EventList from '../../components/EventList/EventList';
import styles    from './Event.module.css';

const eventsData = [
  {
    dateTime: '2025-09-02T18:00',
    displayDate: 'Tue, Sep 2 2025 6:00 PM 8:00 PM CST',
    title: 'First Info Night: Fall 2025',
    desc: 'Join us for a walkthrough of this semester’s application process, meet the leadership team, and ask any questions.',
    location: 'Digital Computer Lab Room #1310',
    locHref: 'https://docs.google.com/forms/d/e/1FAIpQLSfbky-jWiNfTXGP7tUGjrT_EDqFcBYR8RCqOwJIQ1FWEtGT8g/viewform'
  },
  {
    dateTime: '2025-09-02T18:00',
    displayDate: 'Tue, Sep 2 2025 · 6:00 PM 8:00 PM CST',
    title: 'First Info Night: Fall 2025',
    desc: 'Join us for a walkthrough of this semester’s application process, meet the leadership team, and ask any questions.',
    location: 'Digital Computer Lab Room #1310',
    locHref: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.307915588152!2d-88.22912337242128!3d40.113140971490154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd76a9d6de433%3A0xbad854d2549cff44!2sDigital%20Computer%20Laboratory!5e0!3m2!1sko!2skr!4v1750584717049!5m2!1sko!2skr'
  },
  {
    dateTime: '2025-09-17T18:00',
    displayDate: 'Wed, Sep 17 2025 6:00 PM CST',
    title: 'General Meeting',
    desc: 'General Meeting',
    location: 'TBD'
  },
  {
    dateTime: '2025-09-24T18:00',
    displayDate: 'Wed, Sep24 2025 6:00 PM CST',
    title: 'General Meeting',
    desc: 'General Meeting',
    location: 'TBD'
  },
  {
    dateTime: '2025-10-01T18:00',
    displayDate: 'Wed, Oct 1 2025 6:00 PM CST',
    title: 'General Meeting',
    desc: 'General Meeting',
    location: 'TBD'
  },
  {
    dateTime: '2025-10-08T18:00',
    displayDate: 'Wed, Oct 8 2025 6:00 PM CST',
    title: 'General Meeting',
    desc: 'General Meeting',
    location: 'TBD'
  },
  {
    dateTime: '2025-10-22T18:00',
    displayDate: 'Wed, Oct 22 2025 6:00 PM CST',
    title: 'General Meeting',
    desc: 'General Meeting',
    location: 'TBD'
  },
  {
    dateTime: '2025-11-05T18:00',
    displayDate: 'Wed, Nov 5 2025 6:00 PM CST',
    title: 'General Meeting',
    desc: 'General Meeting',
    location: 'TBD'
  },
  {
    dateTime: '2025-11-12T18:00',
    displayDate: 'Wed, Nov 12 2025 6:00 PM CST',
    title: 'General Meeting',
    desc: 'General Meeting',
    location: 'TBD'
  },
  {
    dateTime: '2025-11-19T18:00',
    displayDate: 'Wed, Nov 19 2025 6:00 PM CST',
    title: 'General Meeting',
    desc: 'General Meeting',
    location: 'TBD'
  },
  {
    dateTime: '2025-11-26T18:00',
    displayDate: 'Wed, Nov 26 2025 6:00 PM CST',
    title: 'General Meeting',
    desc: 'General Meeting',
    location: 'TBD'
  },
  {
    dateTime: '2025-12-03T18:00',
    displayDate: 'Wed, Dec 3 2025 6:00 PM CST',
    title: 'General Meeting',
    desc: 'General Meeting',
    location: 'TBD'
  },
  {
    dateTime: '2025-12-10T18:00',
    displayDate: 'Wed, Dec 10 2025 6:00 PM CST',
    title: 'General Meeting',
    desc: 'General Meeting',
    location: 'TBD'
  },
  {
    dateTime: '2025-12-17T18:00',
    displayDate: 'Wed, Dec 17 2025 6:00 PM CST',
    title: 'General Meeting',
    desc: 'General Meeting',
    location: 'TBD'
  }
  
];

const Events = () => (
  <>
    <SubHeader title="Events" />
    <div className={styles.loc}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.307915588152!2d-88.22912337242128!3d40.113140971490154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd76a9d6de433%3A0xbad854d2549cff44!2sDigital%20Computer%20Laboratory!5e0!3m2!1sko!2skr!4v1750584717049!5m2!1sko!2skr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <h2 className={styles.eventstitle}>Upcoming Events</h2>
    <EventList events={eventsData} />
  </>
);

export default Events;