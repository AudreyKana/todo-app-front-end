import React from 'react'
import "./trash.css"

import * as TbIcons from "react-icons/tb";

import Button from "../../components/Button/Button";
import TaskItem from "../../components/Task/taskItem";
import MeetingItem from "../../components/Meetings/meetingItem";

import { taskData } from "../../components/Task/taskData";
import { meetingData } from "../../components/Meetings/mettingData";
import { useSelector } from 'react-redux';

export default function Trash() {

  const taskData = useSelector((state) => (state.tasks ?? []).filter(item => item.deleted === true));
  let date = new Date().toLocaleDateString("fr-FR")

  return (
    <>
      <div className="listetask col-span-3">
        <h1 className="margin-bottom-30">Trash</h1>
        <hr className="border-slate-100" />
        <div className="my-5" >
          <div className="w-full">
            {
              taskData.map((item, i) => {
                return <TaskItem key={i} id={i} task={item} deleted={true}  />
              }
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}
