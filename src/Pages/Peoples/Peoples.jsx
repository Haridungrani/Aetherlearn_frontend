import React from 'react';
import s from './Peoples.module.css';
import PeopleList from './PeopleList';

const Peoples = () => {
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h1 className={s.title}>People</h1>
      </div>
      <PeopleList />
    </div>
  );
};

export default Peoples;
