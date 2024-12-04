import React, { useState } from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// css
import styles from './App.module.css'

// Interface
import { ITask } from './interfaces/Task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  return <div>
    <Header />
    <main className={styles.main}>
      <div>
        <h2>What are you going to do?</h2>
        <TaskForm btnText='Task Create' taskList={taskList} setTaskList={setTaskList}/>
      </div>
      <div>
        <h2>Your tasks:</h2>
        <TaskList />
      </div>
    </main>
    <Footer />
  </div>
}

export default App;
