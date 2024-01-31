import React from 'react'

import { AiFillDelete , AiFillEdit} from "react-icons/ai"
const Task = ({title,deleteTask,index}) => {
  return (
             <div className="displayArea">
              <div className="box" key={index}>
                <p>{title}</p>
                <div className="actionIcons">
                {/* <AiFillEdit /> */}
              <button onClick={()=>deleteTask(index)} > <AiFillDelete  /></button>   
                </div>
              </div>
          </div>
        
  )
}

export default Task