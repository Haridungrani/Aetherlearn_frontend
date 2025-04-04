import React, { useEffect, useState } from 'react'
import s from './UploadVideoPopup.module.css'
import DragAndDropVideo from '../DragAndDropVideo/DragAndDropVideo';
import {getQueryParam} from '../../utils/queryFunction'
import VideoUploadDetails from '../VideoUploadDetails/VideoUploadDetails';
import TempBox from '../TempBox/TempBox';
import { updateDetailsOfVideo } from '../../services/operation/video';
const UploadVideoPopup = ({closeModal}) => {

    const [loading,setLoading] = useState(false)
    const [stage,setStage] = useState(getQueryParam('stage'))

    useEffect(()=>{
        setStage(getQueryParam('stage'))
        console.log("Rendred")
    },(getQueryParam('stage')))

    console.log(stage)
    return (
       
        <TempBox>
            { (stage !== "2") && (<DragAndDropVideo loading={loading} setLoading={setLoading} closeModal={closeModal} />) }

            { (stage == "2") &&  (<VideoUploadDetails closeModal={closeModal} title={"Details"} submitHandler={updateDetailsOfVideo} />)}
        </TempBox>
    )
}

export default UploadVideoPopup
