import React from 'react'
import '../CSS/header.scss';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
        <div className="logo">Task_Reminder</div>
        <div className="navList">
            <Link to={"/"}>My tasks</Link>
            <Link to={"/"}>My Account</Link>

        </div>
    </div>
  )
}

export default Header