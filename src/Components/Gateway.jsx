import React from 'react'
import '../CSS/gateway.scss';
import {Link} from 'react-router-dom'
const Gateway = () => {
  return (
    <div className="gateway">     
    <button> <Link to={'/'}  >  Sign In with google </Link></button>
    </div>
  )
}

export default Gateway