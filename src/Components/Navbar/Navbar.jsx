import React from 'react'
import s from './Navbar.module.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Logo from '../../assets/aetherlearn-high-resolution-logo-black-transparent.png'
import ProfileDropdown from '../Profile/Profile';
import JoinClassroom from '../ClassroomPopup/JoinClassroom';
const Navbar = () => {
  return (
    <div className={s.navbarContainer}>
        <div className={s.leftPart}>
            <RxHamburgerMenu className={s.hamburgerIcon} />
            <Link to="/dashboard" className={s.temp}><img src={Logo} alt="" /></Link>
        </div>

        <div className={s.rightPart}>
            <JoinClassroom />
            <ProfileDropdown />
        </div>

    </div>
  )
}

export default Navbar