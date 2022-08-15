import { useState , useEffect } from "react"
import AddTask from "./components/addTask";
import Header from "./components/header";
import Tasks from "./components/tasks";
import {getResponse , sendResponse , deleteData} from "./utils";

function App() {
  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=> {
    const data = getResponse('http://localhost:5000/tasks');
    data.then(res => setTasks(res)); 
  }, [])

const deleteTask = (id) => {
  deleteData('http://localhost:5000/tasks', id).then(() => setTasks(tasks.filter((task)=> task.id !== id)) )
  // setTasks(tasks.filter((task)=> task.id !== id))
} 

const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
} 
const addTasks = (task) => {
  sendResponse('http://localhost:5000/tasks', task).then(res=> setTasks([...tasks, { id : tasks.length + 1,...res}]))
  // setTasks([...tasks, { id : tasks.length + 1,...task}])
  // setTasks(prev => [...prev, {...task, id: prev. length+1}]);
}

const toggleAddTasks = () => {
  setshowAddTask(prev => !prev)
}

  return (
    <div className="container">
      <Header onClick={toggleAddTasks} show={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTasks} />}
      {tasks.length === 0 ? 'Nothing To See Here' : <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />}
    </div>
  );
}

export default App;
