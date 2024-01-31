import React, { useEffect, useState } from 'react'
import Gateway from './Gateway'
import '../CSS/home.scss'
import Task from './Task'


const Home = () => {
  const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title } ]);
    setTitle("")
    if (title.trim() === "") {
      alert("Please enter a value.");
      return;
    }
    setSubmitted(true);
  };
  const deleteTask = (index) => {
    const filteredArray = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(filteredArray);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  return (
    <div className="hero">
      {/* <Gateway /> */}
      <div className="taskContainer">
        <div className="inputArea">
          <form action="" onSubmit={submitHandler}>
            <h3>Task</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter your task' required />

            <input type="submit" value="Add Task" disabled={submitted}/>
          </form>
        </div>
        <div className="outputArea">
          <h2>Your Tasks</h2>
          {tasks.map((item, index) => (
            <Task key={index}
              title={item.title}
              deleteTask={deleteTask}
              index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home