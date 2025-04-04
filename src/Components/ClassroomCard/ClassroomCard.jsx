import React from 'react'
import s from './ClassroomCard.module.css'
import bgImg from '../../assets/ClassBG.jpg'
const ClassroomCard = ({ item }) => {
    return (
        <div className={s.cardContainer}>
            <img src={bgImg} alt="" />
            <div className={s.absoluteOverlay}>
                {
                    item.name.length > 20 ? (<h1>{item.name.substring(0, 20)} ...</h1>
                    ) : (<h1>{item.name}</h1>)
                }
                <p className={s.text}>subject:</p>
                <p className={s.text}>{item.subject}</p>
                <p className={s.description}>{item.description}</p>
            </div>
        </div>
    )
}

export default ClassroomCard