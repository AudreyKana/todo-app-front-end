import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toBase64 } from '../../core/utils';
import Tache from '../../models/tache';
import { apiAddTask } from '../../redux/api';
import { addTask, updateTask } from '../../redux/todoAction';

export default function AddTaskPopup({taskEdit = null, showPopup}) {
    const [task, setTask] = useState((taskEdit !== null) ? taskEdit : new Tache() )
    const [selected, setSelected] = useState((taskEdit !== null) ? taskEdit.status : '');
    const dispatch = useDispatch();

    const onInptChange = (e) => {
        console.log('the input log : ',e.target);
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }
    const onSelectChange = (e) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
        setSelected(e.target.value);
    }
    const submitTask = async (e) => {
        e.preventDefault()
        console.log(task);
        let payload = {
            title: task.title,
            date: task.date,
            periode: task.heure,
            status: task.status,
            important: task.important,
            logo: task.image,
            is_deleted: false
        }
        apiAddTask(payload).then(async (req, res)=> {
            if([200, 201].includes(res.status)){
                setTask(new Tache())
                showPopup(false)
              }
            
        }).catch((e)=>console.log('loading add task err : ', e))
        // dispatch((taskEdit !== null) ? updateTask(task) : addTask(task))
    }
    const onInputImageChange = async (e) => {
        console.log('the input log : ',e.target.name);
        let file = await toBase64()
        setTask({...task, [e.target.name]:e.target.files[0]});
    }

    useEffect(() => {
        console.log(task);
    }, [task])
    return (
        <>
            <div className="popop justify-center items-center flex h-full absolute inset-0">
                <form className="p-12 bg-gray-50 rounded-md ml-4" onSubmit={(e) => submitTask(e)}>

                    <label for="label">Label:</label><br />
                    <input className="w-full my-2 p-2 bg-none rounded-lg border-solid border-2 border-gray-200 text-xl" value={task.title} onChange={(e) => onInptChange(e)} type="text" placeholder="Enter the label" name="title" id="label" required /> <br />

                    <label for="date">Date:</label> <br />
                    <input className=" w-full my-2 p-2 bg-none rounded-lg border-solid border-2 border-gray-200 text-xl" value={task.date} type="date" onChange={(e) => onInptChange(e)} placeholder="Enter the date" name="date" id="date" required pattern="\d{2}-\d{2}-d{4}" /> <br />

                    <label for="période">Période:</label> <br />
                    <input className="w-full my-2 p-2 bg-none rounded-lg border-solid border-2 border-gray-200 text-xl" value={task.heure} type="time" onChange={(e) => onInptChange(e)} placeholder="Enter the period" name="heure" id="period" required /> <br />

                    {/* <label for="description">Description:</label> <br />
                <textarea className="inputbtn" value={task.description} onChange={(e) => onInptChange(e)} name='description' placeholder="Enter the Description" required></textarea><br /> */}

                    <label for="statut">Statut:</label> <br />
                    <select className="select  text-xl" value={selected} onChange={(e) => onSelectChange(e)} name="statut" required>
                        <option disabled={true} value="">--Select a status--</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Waiting">Waiting</option>
                        <option value="Approuved">Approuved</option>
                        <option value="In Review">In Review</option>
                        <option value="Finish">Finish</option>
                    </select>
                    <br />

                    <label for="image">Image</label> <br/>
                    <input className='image' type="file" onChange={(e) => onInputImageChange(e)} name="image" id="image" required></input> <br/> <br/>

                    <label htmlFor="important">
                        <input className="check" checked={task.important} onChange={(e) => { setTask({ ...task, important: !task.important }) }} type="checkbox" id='important'></input>
                        Important
                    </label><br />

                    <button className="w-28  ml-4 p-2.5 bg-violet-600 rounded-md border-none text-white text-xl" type="submit">submit</button>

                    <button className="w-28 ml-12 my-9 p-2.5 bg-orange-500 rounded-md border-none text-white text-xl" onClick={() => {showPopup(false) }}>Cancel</button>
                </form>
            </div>
        </>
    )
}
