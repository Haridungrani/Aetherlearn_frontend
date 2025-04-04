import { useRef, useState } from "react"
import { SlOptionsVertical } from 'react-icons/sl'; 

import './option.css'

import useOnClickOutside from "../../hooks/useOnClickOutside"
import { logout } from "../../services/operation/authApi"

export default function Option({optionData, id, handleDeletePost,setEditOpen}) {

  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <>
      <button className="relative" onClick={() => setOpen(true)}>
        <div className="ProfileDrop_22">
             <SlOptionsVertical />
        </div>
        {open && (
          <div onClick={(e) => e.stopPropagation()} ref={ref} className="DropDownContainer_22" >
            {
              optionData && optionData.map(data=>(
                <div className="linkAtDropDown_22" onClick={() => data.name === "Edit" ? data.function(setEditOpen,id) : data.function(id, handleDeletePost)}>
                  {data.name} 
                </div>
              ))
            }
          </div>
        )}
      </button>
    </>
  )
}