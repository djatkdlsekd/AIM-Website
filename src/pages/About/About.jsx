import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import AboutSection from '../../components/AboutSection/AboutSection';
import Leaders from '../../components/Leaders/Leaders';
import styles from './About.module.css';

const leadership = [
    {
        name: 'Yunho Chang',
        role: 'President',
        imgSrc: '/Images/Chang.jpeg',
        profileUrl: 'https://www.linkedin.com/in/yunhoc1204'
    },
    {
        name: 'Jacob Lee',
        role: 'Vice President',
        imgSrc: '/Images/No Image from aimpartnersuiuc.png',
        profileUrl: 'https://www.linkedin.com/in/jacob-lee-a5164734a/'
    },
    {
        name: 'Tony Kwon',
        role: 'Head of Investment',
        imgSrc: '/Images/No Image from aimpartnersuiuc.png',
        profileUrl: 'https://www.linkedin.com/in/tonykwon02/'
    },
    {
        name: 'Jaeho Lim',
        role: 'Head of Research',
        imgSrc: '/Images/No Image from aimpartnersuiuc.png',
        profileUrl: 'https://www.linkedin.com/in/jaeho-lim/'
    },
    {
        name: 'Joonyong Um',
        role: 'Head of Software',
        imgSrc: '/Images/No Image from aimpartnersuiuc.png',
        profileUrl: 'https://www.linkedin.com/in/joonyong-um-630489369/'
    }
];

const About = () => (
    <>
    <SubHeader title="About Us"/>
    <AboutSection
        imgSrc="/Images/AIM-Logo.svg"
        heading="About AIM-Partners"
        paragraphs={[
            'Founded in January 2020, AIM Partners is an investment management organization run by UIUC students. We comprise undergraduate and graduate students from diverse backgrounds, which enables us to take a holistic approach to our investment portfolios.',
            'Our mission is to provide unique market insights and deliver exceptional investment returns to our members. Through AIM Partners, not only do we hope to provide both educational and practical experience for students who have a passion for investment, but also to continue our ongoing partnerships with our clients.'
        ]}
        />
        <Leaders title="Leadership" members={leadership}/>
    </>
);

export default About;