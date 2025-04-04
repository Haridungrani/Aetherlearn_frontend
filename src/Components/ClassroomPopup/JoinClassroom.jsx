import { useRef, useState } from "react"
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Avtor from '../../assets/Avtor.png'
import './Profile.css'

import JoinModal from "../JoinClassroomModal/JoinModal";
import CreateModal from "../CreateClassModal/CreateModal";

import useOnClickOutside from "../../hooks/useOnClickOutside"
// import { logout } from "../services/operation/authApi"

const JoinClassroom = () => {

  // const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const [openJoin, setJoinModal] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);

  useOnClickOutside(ref, () => setOpen(false))
  // if(!user) return null


  return (
    <>
      <button className="relative" onClick={() => setOpen(true)}>
        <div className="ProfileDrop_22">
          <FaPlus src={Avtor} alt={`a`} className="imageAtDropDown" />
        </div>
        {open && (
          <div onClick={(e) => e.stopPropagation()} ref={ref} className="DropDownContainer_22" >

            <div onClick={() => { setOpen(false); setOpenCreate(true); }} className="linkAtDropDown_22" >
              Create Class
            </div>

            <div onClick={() => { setOpen(false); setJoinModal(true); }} className="linkAtDropDown_22" >
              Join Class
            </div>

          </div>
        )}
      </button>
      {openCreate && <CreateModal setOpen={setOpenCreate}/>}
      {openJoin && <JoinModal setOpen={setJoinModal} />}

    </>
  )
}

export default JoinClassroom
