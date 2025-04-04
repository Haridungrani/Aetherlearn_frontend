import React from 'react'
import s from './StraemKeyDisplay.module.css'
import { IoIosInformationCircleOutline } from "react-icons/io";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const StraemKeyDisplay = () => {
    return (
        <div className={s.container}>
            <h3>Streamkey : </h3>

            <div className={s.filedContainer}>
                <div className={s.lablerContainer}>
                    <label htmlFor="videoTitle">Stream URL : </label>
                    <IoIosInformationCircleOutline className={s.infoBtn} data-tooltip-id="stream-url-info" />
                    <Tooltip id="stream-url-info" place="top" content="Paste This URL in OBS Studio" />
                </div>
                <div className={s.contentWrapper}>
                    <p>This is Nishant as.kd asd lasdhbaslhb dhlasbdhlsadh bashldbh</p>
                    <button>Copy</button>
                </div>
            </div>

            <div className={s.filedContainer}>
                <div className={s.lablerContainer}>
                    <label htmlFor="videoTitle">Stream Key : </label>
                </div>
                <div className={s.contentWrapper}>
                    <p>This is Nishant as.kd asd lasdhbaslhb dhlasbdhlsadh bashldbh</p>
                    <div className={s.btnContainer}>
                        <button>Reset</button>
                        <button>Copy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StraemKeyDisplay
