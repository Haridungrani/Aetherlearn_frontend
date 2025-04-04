import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Avtor from '../../assets/Avtor.png'
import './Profile.css'

import useOnClickOutside from "../../hooks/useOnClickOutside"
import { logout } from "../../services/operation/authApi"


export default function ProfileDropdown() {
  // const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))
  // if(!user) return null


  return (
    <>
      <button className="relative" onClick={() => setOpen(true)}>
        <div className="ProfileDrop_22">
          <img src={Avtor} alt={`a`} className="imageAtDropDown" />
          <AiOutlineCaretDown className="text-sm text-richblack-100" />
        </div>
        {open && (
          <div onClick={(e) => e.stopPropagation()} ref={ref} className="DropDownContainer_22" >

            <div className="linkAtDropDown_22">
              👋 Hey,Nishant
            </div>

            <div onClick={() => { dispatch(logout(navigate)); setOpen(false); }} className="linkAtDropDown_22" >
              <VscSignOut className="text-lg" />
              Logout
            </div>

          </div>
        )}
      </button>
    </>
  )
}