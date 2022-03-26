
import '../styles/App.css';
import Banner from './Banner';
import Footer from './Footer';
import Tasks from './Tasks';
import React, { useState } from 'react';

function App() {
  // -----------------------------------------------
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const [todos, setTasks] = useState({tasks});
  const todosLength = todos.tasks.length;
  // -----------------------------------------------
  return (
    <div className='main'>
      <Banner taskNbr={todosLength} />
      <Tasks todos={tasks} action={setTasks} />
      <Footer tasks={tasks} action={setTasks} />
    </div>
  )
}

export default App;
