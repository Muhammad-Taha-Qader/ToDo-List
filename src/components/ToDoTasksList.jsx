import { RiDeleteBin2Line } from "react-icons/ri";

function ToDoTasksList({ list, setList }) {
  const handleDelete = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div>
      {list?.map((item, index) => (
        <div key={index} className="flex px-6 py-2 gap-x-5 items-center">
          <input type="checkbox" name="checked" id="checked" />
          <span className="flex-grow break-all text-wrap">{item}</span>
          <button 
            type="button" 
            onClick={() => handleDelete(index)}
            className="text-red-500 hover:text-red-700 bg-transparent hover:bg-zinc-950/70 rounded-lg  border-none text-lg"
          >
            <RiDeleteBin2Line/>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToDoTasksList;
