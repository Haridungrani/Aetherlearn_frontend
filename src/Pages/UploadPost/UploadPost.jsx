import React, {useState } from 'react'
import s from './UploadPost.module.css'
import { MdFileUpload } from "react-icons/md";
import PostListAdmin from '../../Components/PostListAdmin/PostListAdmin';
import TempBox from '../../Components/TempBox/TempBox';
import PostForm from '../../Components/CreatePostPopup/PostForm';
import { setQueryParam,clearQueryParams } from '../../utils/queryFunction';
import EditTextEditor from '../../Components/EditTextEditor/EditTextEditor';


export const openEdit = (setEditOpen,id) => {
  setEditOpen(true);
  setQueryParam("id",id)
}

const UploadPost = () => {
  
    const [open,setOpen] = useState(false);
    const [editOpen,setEditOpen] = useState(false);
    const [loading, setLoading] = useState(false)

    function closeModal() { 
      setOpen(false);
      setEditOpen(false);
      clearQueryParams();
    }

  
  return (
    <>
        <div className={s.container}>
            <div className={s.titleContainer} >
                <h1 className={s.title}>Posts</h1>
                <button className={s.btn} onClick={()=>setOpen(true)}> <MdFileUpload className={s.icon} /> Create</button>
            </div>
           <PostListAdmin setEditOpen={setEditOpen} />
        </div>

        {open &&  (
          <TempBox>
            <PostForm loading={loading} setLoading={setLoading} closeModal={closeModal}  />
          </TempBox>
        )}

       {
        editOpen && (
          <TempBox>
            <EditTextEditor loading={loading} setLoading={setLoading} closeModal={closeModal} />
          </TempBox>
       )}

    </>
  )
}

export default UploadPost