// import { useState } from "react"

function ToDoTasksList({list}) {
    // const [list, setlist] = useState([]);
    console.log("LIST HERE IS:")
    console.log(list)
  return (
    <div>
        {list?.map((item, index) => (
          <div key={index} className="flex px-6 py-2 gap-x-5">
            <input type="checkbox" name="checked" id="checked" />
            {item}
          </div>
        ))}
    </div>
  )
}

export default ToDoTasksList