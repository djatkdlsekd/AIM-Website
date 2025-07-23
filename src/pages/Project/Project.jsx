import React from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import SectionTitle from '../../components/SubTitle/SubTitle';
import LinkList from '../../components/LinkList/LinkList';
import styles    from './Project.module.css';

const Project = () => {
  const reports = [
    { label: 'September Monthly Report', href: '#' },
    { label: 'October Monthly Report', href: '#' },
    { label: 'September Monthly Report', href: '#' },
    { label: 'November Monthly Report', href: '#' },
    { label: 'December Monthly Report', href: '#' },
  ];
  const presentations = [
    { label: 'September Presentation', href: '#' },
    { label: 'October Monthly Presentation', href: '#' },
    { label: 'September Monthly Presentation', href: '#' },
    { label: 'November Monthly Presentation', href: '#' },
    { label: 'December Monthly Presentation', href: '#' },
  ];

  return (
    <>
      <SubHeader title="Project" />
      <SectionTitle title="Our Project" />

      <div className={styles.pj}>
        <LinkList heading="Reports"    items={reports} />
        <LinkList heading="Investments" items={presentations} />
      </div>
    </>
  );
};

export default Project;