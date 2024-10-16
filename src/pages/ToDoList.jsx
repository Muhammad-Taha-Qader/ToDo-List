import { useState } from "react"
import Nav from "../components/Nav"
import ToDoTasksList from "../components/ToDoTasksList";
import { MdOutlineDoneOutline } from "react-icons/md";

const ToDoList = () => {
  const [todoTask, setToDoTask] = useState('');
  const [list, setList] = useState([]);

  const handleToDoTaskSetter = (e) => {
    setToDoTask(e.target.value);
  }

  const handleListSetter = () => {
    if (todoTask){
      setList([...list , todoTask]);
    }
    setToDoTask('');
  }

  return (
    <div className="flex justify-center flex-col">
        <Nav/>
        <h1 className="font-stalemate text-center mt-32">My To Do List !</h1>
        <div className="flex w-screen justify-center mt-6">
            <div className=" w-96 bg-zinc-900 flex flex-col rounded-3xl px-6">
                <h2 className="my-6 pl-2 text-xl text-gray-100 font-afacad-600">Whats on your mind</h2>
                <div className="flex flex-row w-full rounded-xl border-gray-100 border-2 bg-zinc-950 mb-3">
                    <input type="text" name="todoTask" id="todoTask" value={todoTask}
                        onChange={handleToDoTaskSetter} className=" bg-zinc-950 rounded-l-lg py-4 px-7 grow active:border-hidden"/>

                    <button type="button" onClick={handleListSetter}>
                      <MdOutlineDoneOutline className=" z-10" />
                    </button>
                </div>
                
                
                <ToDoTasksList list={list} setList={setList} className="px-6"/>
                <div className="mb-3"></div>

            </div>
        </div>

    </div>
  )
}

export default ToDoList