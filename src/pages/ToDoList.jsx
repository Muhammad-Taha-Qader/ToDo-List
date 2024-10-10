import { useState } from "react"
import Nav from "../components/Nav"
import ToDoTasksList from "../components/ToDoTasksList";

const ToDoList = () => {
  const [todoTask, setToDoTask] = useState();
  const handleToDoTaskSetter = (e) => {
    console.log("Setter clled");
    setToDoTask(e.target.value);
  }
  return (
    <div>
        <Nav/>
        <div className="flex w-screen justify-center mt-44">
            <div className=" w-96 bg-zinc-500 flex flex-col rounded-3xl px-6">
                <h2 className="mt-3">Whats on your mind</h2>
                <input type="text" name="todoTask" id="todoTask" 
                       onChange={handleToDoTaskSetter} className="rounded-xl py-2 px-7"/>
                <ToDoTasksList todoTask={todoTask}/>

            </div>
        </div>

    </div>
  )
}

export default ToDoList