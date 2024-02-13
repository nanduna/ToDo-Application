    import React, { useEffect, useState } from 'react'
    import Create from './Create'
    import './Home.css';
    import axios from 'axios';
    import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

    function Home() {
        const [todos, setToDos] = useState([])
        useEffect(() => {
            axios.get("http://localhost:5000/add")
                .then(result => setToDos(result.data))
                .catch(err => console.log(err))
        }, [])
    
        const handleEdit = (id) => {
            axios.put(`http://localhost:5000/update/${id}`, {}, { headers: { 'Content-Type': 'application/json' } })
                .then(result => console.log(result))
                .catch(err => console.log(err))
        }
        
        const handleDelete = (id) => {
            axios.delete(`http://localhost:5000/delete/${id}`, {}, { headers: { 'Content-Type': 'application/json' } })
            .then(result => console.log(result))
            .catch(err => console.log(err))
        }

        return (
            <div className='home'>
                <h1>TO DO</h1>
                <Create />
                {todos.length === 0
                    ? <div>
                        <h2>No Records</h2>
                    </div>
                    : todos.map(todo => (
                        <div className='Ttask' key={todo._id}>
                            <div className='chekbox' onClick={() => handleEdit(todo._id)}>
                                {todo.done
                                    ? <BsFillCheckCircleFill />
                                    : <BsCircleFill className='icon' />}
                                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                            </div>
                            <div>
                                <span><BsFillTrashFill className='icon' onClick={()=> handleDelete(todo._id)}/></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
    
    export default Home;
    