import React from 'react'
import "./someday.css"

import * as TbIcons from "react-icons/tb";

import TaskItem from "../../components/Task/taskItem";
import MeetingItem from "../../components/Meetings/meetingItem";
import Button from '../../components/Button/Button';

import { taskData } from "../../components/Task/taskData";
import { meetingData } from "../../components/Meetings/mettingData";
import { useSelector } from 'react-redux';

export default function Someday() {
    const taskData = useSelector((state) => (state.tasks ?? []).filter(item => item.deleted !== true));
    let date = new Date().toLocaleDateString("de-DE")
  
    return (
        <>
          <div className="w-full pr-4 lg:col-span-3">
            <h1 className="mb-7">Someday</h1>
    
            <div className="flex flex-row flex-wrap items-center justify-between">
              <Button label={'All'} number={10} />
              <Button label={'Important'} underline={true} />
              <Button label={'Notes'} number={15} />
              <Button label={'Links'} />
            </div>
    
            <hr className="border-slate-100" />
    
            <div className="my-5" >
              <h3 className="m-6 mt-10 text-black  text-xl font-medium">Today Task</h3>
              <hr className="border-slate-100" />
              <div className="w-full">
                {
                  taskData.map((item, i) => {
                    if (new Date(item.date).toLocaleDateString("fr-FR") === new Date().toLocaleDateString("fr-FR")) {
                      return <TaskItem key={i} id={i} task={item} />
                    }
                  }
                  )
                }
              </div>
            </div>
    
            <div className="my-5" >
              <h3 className="m-6 mt-10 pt-10  text-black  text-xl font-medium">Upcoming Task</h3>
    
              <hr className="border-slate-100" />
    
              <div className="w-full px-2">
                {
                  taskData.map((item, i) => {
                    if (new Date(item.date).toLocaleDateString("fr-FR") !== new Date().toLocaleDateString("fr-FR")) {
                      return <TaskItem key={i} id={i} task={item} />
                    }
                  }
                  )
                }
              </div>
            </div>
          </div>
    
          <div className="bg-light w-full border-l-0.5 border-slate-500 px-8 py-4 h-full rounded-xl lg:col-span-2">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="col-start-9 flex justify-end">
                <TbIcons.TbUsers />
              </div>
              <div className="col-start-10 flex justify-end">
                <button className="btn0">5</button>
              </div>
            </div>
            <h2 className="">Mettings Schedule</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
              {
                meetingData.map((item, index) => <MeetingItem key={index} meeting={item} />)
              }
            </div>
          </div>
        </>
      )
}
