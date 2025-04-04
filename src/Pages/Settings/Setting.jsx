import React from 'react';
import s from './Setting.module.css';
import Settings from './Settings';

const Setting = () => {
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
      </div>
      <Settings />
    </div>
  );
};

export default Setting;
