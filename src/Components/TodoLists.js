import React, {useState} from 'react'
import Todolist from "./Todolist";

const TodoLists = () => {
    const [headerOfTodolist, setHeaderOfTodoList] = useState('');
    const [todolists, setTodolists] = useState([]);

    const addTodolist = () => {
        if(headerOfTodolist == '')
            return;
        setTodolists(todolists.concat({name: headerOfTodolist, content: []}))
        setHeaderOfTodoList('')
        console.log(todolists)
    }

    return(
        <>
            <input value={headerOfTodolist} onChange={(e) => setHeaderOfTodoList(e.target.value)}/>
            <button onClick={addTodolist}>Add</button>
            <ul>
                {
                    todolists.map((todolist, i) =>
                    <Todolist key={i}/>)
                }
            </ul>
        </>
    )
}

export default TodoLists