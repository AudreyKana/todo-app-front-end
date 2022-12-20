import React from "react";
import "./trash.css";

import * as TbIcons from "react-icons/tb";

import Button from "../../components/Button/Button";
import TaskItem from "../../components/Task/taskItem";
import MeetingItem from "../../components/Meetings/meetingItem";

import { taskData } from "../../components/Task/taskData";
import { meetingData } from "../../components/Meetings/mettingData";
import { useSelector } from "react-redux";
import { Pagination } from "../../components/Pagination/pagination";

export default function Trash() {
  const [data, setData] = React.useState([]);
  const taskData = useSelector((state) => state.tasks);
  let date = new Date().toLocaleDateString("de-DE");

  React.useEffect(() => {
    if (taskData.results !== undefined) {
      const task = taskData.results.filter((t) => t.is_deleted !== false);
      setData(task);
    }
  }, [taskData]);

  return (
    <>
      <div className="listetask col-span-3">
        <h1 className="margin-bottom-30">Trash</h1>
        <hr className="border-slate-100" />
        <div className="my-5">
          <div className="w-full">
            {data.map((item, i) => {
              return <TaskItem key={i} id={i} task={item} deleted={true} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
