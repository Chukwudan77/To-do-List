import { useState } from "react";
import { Task } from "./Task";
import "./App.css";

function App(){
    const [newItem, setNewItem]=useState("")
    const [todoList, setTodoList]=useState([])

    const handleChange=(e)=>{
        setNewItem(e.target.value)
    }
    const addTask=()=>{
        const taskDetails={
            id: todoList.length===0 ? 1:todoList[todoList.length-1].id + 1,
            taskDetails:newItem,
            completed:false,
        }
        setTodoList([...todoList, taskDetails])
        setNewItem("")

    }



    const deleteItem=(id)=>{
        const newTodoList=todoList.filter((task)=>task.id !==id
        );
        setTodoList(newTodoList)
    }
    
    const completedTask=(id)=>{
        setTodoList(
            todoList.map((task)=>{
                if(task.id===id){
                    return {...task, completed:true};

                }else{
                    return task
                }

            })
        )
    }

    return(
        <div className="name">
            <input type="text" onChange={handleChange} value={newItem} />
            <button onClick={addTask}>Add Task</button>
            <div>
                {todoList.map((task)=>{
                    return <Task 
                    key={task.id}
                     taskDetails={task.taskDetails}
                     id={task.id} deleteItem={deleteItem}
                     completedTask={completedTask}
                     completed={task.completed} 
                     
                    />
                })}
            </div>

        </div>
        )
}


export default App;