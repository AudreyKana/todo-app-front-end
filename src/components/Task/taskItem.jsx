import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, deleteTempTask, restoreDeletedTask, updateTask } from '../../redux/todoAction';
import "./taskItem.css";
import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import AddTaskPopup from '../AddTaskPopup';

export default function TaskItem({ task, i, deleted = false, taskEdit }) {

    const dispatch = useDispatch();
    const [popup, setPopup] = useState(false);

    const taskColors = [
        {
            status: "Waiting",
            color: "rgb(144, 146, 161)",
            backgroundColor: "rgba(144, 146, 161, 0.1)"
        },
        {
            status: "In Progress",
            color: "rgb(1, 186, 239)",
            backgroundColor: "rgba(1, 186, 239, 0.1)"
        },
        {
            status: "In Review",
            color: "rgb(205, 42, 59)",
            backgroundColor: "rgba(205, 42, 59, 0.1)"
        },
        {
            status: "Approuved",
            color: "rgb(21, 255, 0)",
            backgroundColor: "rgba(21, 255, 0, 0.1)"
        }
    ]
    let style = {
        backgroundColor: "",
        color: ""
    }

    taskColors.forEach(element => {
        if (element.status === task.statut) {
            style.color = element.color
            style.backgroundColor = element.backgroundColor
        }
    });

    return (
        <div className="w-full m-2 my-4 grid gap-x-4 grid-cols-12 items-center ">
            <div className="col-span-12 md:col-span-10 lg:col-span-7">
                {/* le htmlFor permet d'afficher l'action qui se passe sur le checkbox lorsqu'on clique sur le texte */}
                <label className="task-content" htmlFor={i}>
                    {/* ici on récupère le nom de la tache */}
                    <p>{task.title}</p>
                    {/* cette ligne permet de récupérer le nom de la tache et joindre à ça un checkbox */}
                    <input type="checkbox" id={i} />
                    <span className="checkmark"></span>

                </label>
            </div>
            <div className="col-start-1 col-span-4 md:col-span-2 lg:col-span-3 py-2 flex md:justify-end">
                {/* on récupère le statut de la tache dans un span */}
                <span className="py-2 rounded-full flex items-center justify-center text-xs w-28 min-w-fit" style={style} >{task.statut}</span>
            </div>

            <div className="col-start-5 md:col-start-1 md:col-span-2 lg:col-span-2">
                {!deleted &&
                    <div className=" flex lg:justify-end">
                        <button
                            className="bg-blue-400 m-0.5 items-center content-center p-3.5 border-none rounded-xl text-white"
                            onClick={() => setPopup(true)}
                        >
                            <HiIcons.HiOutlinePencilAlt color="white" size={15} />
                        </button>
                        <button
                            className="bg-red-400 m-0.5 items-center content-center p-3.5 border-none rounded-xl text-white"
                            onClick={() => dispatch(deleteTempTask(task.id))}
                        >
                            <HiIcons.HiOutlineTrash color="white" size={15} />
                        </button>
                    </div>
                }
                {deleted &&
                    <div className=" flex lg:justify-end">
                        <button
                            className="bg-green-400 m-0.5 items-center content-center p-3.5 border-none rounded-xl text-white"
                            onClick={() => dispatch(restoreDeletedTask(task.id))}
                        >
                            <FaIcons.FaTrashRestore color="white" size={15} />
                        </button>
                        <button
                            className=" bg-red-400 m-0.5 items-center content-center p-3.5 border-none rounded-xl text-white"
                            onClick={() => dispatch(deleteTask(task.id))}
                        >
                            <HiIcons.HiOutlineTrash color="white" size={15} />
                        </button>
                    </div>
                }
            </div>

            {popup &&
                <AddTaskPopup showPopup={setPopup} taskEdit={task} />
            }
        </div>
    )
}

