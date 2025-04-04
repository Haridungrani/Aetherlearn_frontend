import React from 'react';
import s from './TempBox.module.css';

const TempBox = ({ children }) => {
  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        {children}
      </div>
    </div>
  );
};

export default TempBox;
