import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import TodoTask from './components/todoTask';
import {ITask} from'./interfaces'

const App: FC = () => {

  const [task, setTask] = useState <string> ("");
  const [deadline, setDeadline] = useState <number> (0);
  const [todo, setTodoList] = useState <ITask[]> ([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name == "task"){
      setTask(event.target.value)
    }
    else{
      setDeadline(Number(event.target.value))
    }
  };

  const addTask = (): void => {
    const newTask = {taskName:task, deadline:deadline}
    setTodoList([...todo, newTask]);
    setTask("")
    setDeadline(0)
  };

  const completeTask = (completedTask: string): void => {
    setTodoList(todo.filter((task) =>{
      return task.taskName != completedTask
    }))
  };

  return (
    <div className="App">

      <div className="header">
        <div className="inputs">
          <input type="text" name="task" placeholder="Task..." value={task} onChange={handleChange}/>
          <input type="number" name="deadline" placeholder="Deadline in days..." value={deadline} onChange={handleChange}/>
        </div>
         <button onClick={addTask}>Add Task</button> 
      </div>

      <div className="todolist">
        {todo.map((task:ITask, key:number)=> {
          return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
      </div>

    </div>
  );
}

export default App;