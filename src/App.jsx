import './App.css';
import './media.css'
import {useRef, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from "@fortawesome/free-solid-svg-icons"
function App() {
  const [input,setInput] = useState("")
  const [todos,setTodos] = useState([])
  const inp = useRef()
  
  const HandleClick = () =>{
    if(input !== ""){
      setTodos([...todos,input]);
      setInput("")
    }
    inp.current.value = ""
 }
 const RemoveClick = (index) =>{
  if(todos){
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos)
  }
 }
  return (
  <div className="App">
    <div className="add">
      <input ref={inp} onChange={(e)=>{
        setInput(e.target.value)
      }} placeholder='Add a task' type="text" />
      <button onClick={HandleClick}>Add</button>
    </div>
    <div className='list'>
      {todos.map((el,index)=>{
        return <div className='task'>
        <h3>{el}</h3>
        <FontAwesomeIcon onClick={()=>{
          RemoveClick(index)
        }} className='icon' icon={faTrash}/>
        </div>
      })}
    </div>
    </div>
  )
}

export default App;
