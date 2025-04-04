import React from 'react'
import s from './StreamDashboard.module.css'
import StraemDetails from '../../Components/StraemDetails/StraemDetails'
import LiveStreamVideo from '../../Components/LiveStreamVideo/LiveStreamVideo'
import StraemKeyDisplay from '../../Components/StraemKeyDisplay/StraemKeyDisplay'
const StreamDashboard = () => {
  return (
    <div className={s.conatiner}>

        <div className={s.upperHalf}>
            <LiveStreamVideo />
            <StraemDetails />
        </div>

        <div className={s.lowerHalf}>
          <StraemKeyDisplay />
        </div>

    </div>
  )
}

export default StreamDashboard