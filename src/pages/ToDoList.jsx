import { useState } from "react"
import Nav from "../components/Nav"
import ToDoTasksList from "../components/ToDoTasksList";

const ToDoList = () => {
  const [todoTask, setToDoTask] = useState('');
  const [list, setList] = useState([]);

  const handleToDoTaskSetter = (e) => {
    setToDoTask(e.target.value);
  }

  const handleListSetter = () => {
    setList([...list , todoTask]);
    setToDoTask('');
    console.log("Setter called vlu of list is: ");
    console.log(list)

  }

  return (
    <div>
        <Nav/>
        <div className="flex w-screen justify-center mt-44">
            <div className=" w-96 bg-zinc-500 flex flex-col rounded-3xl px-6">
                <h2 className="my-3 text-lg font-bold text-gray-100">Whats on your mind</h2>
                <div className="flex flex-row w-full rounded-xl border-gray-100 border-2">
                    <input type="text" name="todoTask" id="todoTask" value={todoTask}
                        onChange={handleToDoTaskSetter} className="rounded-xl py-4 px-7 grow"/>
                    <button type="button" onClick={handleListSetter}>✅</button>
                </div>
                
                
                <ToDoTasksList list={list} className="px-6"/>

            </div>
        </div>

    </div>
  )
}

export default ToDoList