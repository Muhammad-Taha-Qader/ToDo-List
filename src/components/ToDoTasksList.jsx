// import { useState } from "react"

function ToDoTasksList({list}) {
    // const [list, setlist] = useState([]);
    console.log("LIST HERE IS:")
    console.log(list)
  return (
    <div>
        {list?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </div>
  )
}

export default ToDoTasksList