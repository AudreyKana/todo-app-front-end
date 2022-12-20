import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { apiGetAllTasks } from "../../redux/api";
import { getAllTasksAction } from "../../redux/todoAction";
import AddTaskPopup from "../AddTaskPopup";
import Sidebar from "../Sidebar";

export default function MainLayout() {
  const [popup, setPopup] = useState(false);
  const [closePopup, setClosePopup] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    apiGetAllTasks()
      .then(async (res) => {
        if ([200, 201].includes(res.status)) {
          dispatch(getAllTasksAction(res.data));
        }
      })
      .catch((e) => console.log("loading task err : ", e));
  }, []);

  return (
    <>
      <Sidebar showPopup={setPopup} />
      <main className="h-screen w-full ml-7 p-5 bg-white overflow-y-scroll grid grid-cols-1 lg:grid-cols-5 gap-10 justify-between">
        <Outlet />
      </main>
      {popup && <AddTaskPopup showPopup={setPopup} />}
    </>
  );
}
