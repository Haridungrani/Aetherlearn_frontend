import React from 'react'
import s from '../CreateClassModal/CrateModal.module.css'
const CodeModal = ({code,setOpen,setOpen2}) => {
  return (
    <div className={s.fullBg}>
            <div className={s.modalBox}>
                <h3>Successfully Created</h3>
                <div className={s.extraBox}>
                    <p>Share this Code to student and ask them to join using this code.</p>
                    <div className={s.fieldContainer}>
                        <h3 className={s.showCode}>{code}</h3>
                    </div>
                </div>
                <div className={s.btnContainer}>
                    <button onClick={()=>{setOpen({code:null,open:false}); setOpen2(false);}}>Ok</button>
                </div>
            </div>
        </div>
  )
}

export default CodeModal