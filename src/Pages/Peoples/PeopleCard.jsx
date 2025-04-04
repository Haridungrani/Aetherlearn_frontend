import React from 'react';
import s from './PeopleCard.module.css'; // Add appropriate styling

const PeopleCard = ({ user, onDelete }) => {
  return (
    <div className={s.card}>
      {/* Avatar with Initials */}
      <div className={s.imageContainer}>
        <div className={s.badge}>
          <p>{user.firstName[0]}</p>
        </div>
      </div>

      {/* User Info */}
      <div className={s.userInfo}>
        <p className={s.userName}>
          {user.firstName} {user.lastName}
        </p>
      </div>

      {/* Delete Button */}
      <button
        className={s.deleteButton}
        onClick={() => onDelete(user._id)} // Call the delete function on button click
      >
        Remove
      </button>
    </div>
  );
};

export default PeopleCard;
