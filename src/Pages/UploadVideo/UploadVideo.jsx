import s from './UploadVideo.module.css'
import { MdFileUpload } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import VideolistAdmin from '../../Components/VideolistAdmin/VideolistAdmin';
import UploadVideoPopup from '../../Components/UploadVideoPopup/UploadVideoPopup';
import { clearQueryParams , getQueryParam } from '../../utils/queryFunction';
import TempBox from '../../Components/TempBox/TempBox';
import VideoUploadDetails from '../../Components/VideoUploadDetails/VideoUploadDetails';
import { updateDetailsOfVideo } from '../../services/operation/video';


const UploadVideo = () => {

  const [open,setOpen] = useState(false);
  const [editOpen,setEditOpen] = useState(false);

  function closeModal() { 
    clearQueryParams();
    setEditOpen(false);
    setOpen(false)
  }

  useEffect(()=>{
    if(getQueryParam('stage')!==null){
      setOpen(true)
    }
  },[]);

  return (
    <>
      <div className={s.container}>
        <div className={s.titleContainer} >
          <h1 className={s.title}>Upload Video</h1>
          <button className={s.btn} onClick={()=>setOpen(true)}> <MdFileUpload className={s.icon} /> Upload</button>
        </div>
        <VideolistAdmin setEditOpen={setEditOpen} />
      </div>

      {open &&  <UploadVideoPopup closeModal={closeModal} />}

      {editOpen &&  
        <TempBox>
          <VideoUploadDetails closeModal={()=>setEditOpen(false)} title={"Edit Details"} submitHandler={updateDetailsOfVideo} />
        </TempBox>}
  </>
  )
}

export default UploadVideo