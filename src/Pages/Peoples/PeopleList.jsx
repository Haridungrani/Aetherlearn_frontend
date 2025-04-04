import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Components/Spinner/Spinner';
import PeopleCard from './PeopleCard'; // Correct the path to PeopleCard component
import s from './PeoplesList.module.css';
import { getPeoples,removemember } from '../../services/operation/classroom';

const PeopleList = () => {
  const { classroomID } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getPeoples(classroomID,setData,setLoading)
  },classroomID)


  // Delete handler for removing a person from the list
  const handleDelete = (userId) => {
    
    removemember(classroomID,userId,setLoading,setData)
  };

  return (
    <div className={s.container}>
      {loading ? (
        <div className={s.loadingContainer}>
          <LoadingSpinner />
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {data.length === 0 ? (
            <p>No people found</p>
          ) : (
            <div className={s.listWrapper}>
              {data.map((item) => (
                <PeopleCard
                  key={item._id} // Use unique _id as the key
                  user={item} // Pass the entire user object
                  onDelete={handleDelete} // Pass handleDelete function as a prop
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PeopleList;
