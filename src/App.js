import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Dashboard/Index";
import Anytime from "./pages/Anytime/Index";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import AddTaskPopup from "./components/AddTaskPopup";
import Upcoming from "./pages/Upcoming";
import Today from "./pages/Today";
import Someday from "./pages/Someday";
import Trash from "./pages/Trash";
import { useDispatch } from "react-redux";
import { getAllTasksAction } from "./redux/todoAction";
import { apiGetAllTasks } from "./redux/api";


function App() {

  const [popup, setPopup] = useState(false);
  const [closePopup, setClosePopup] = useState(false);
  const dispatch = useDispatch()
  useEffect(()=>{ 
     apiGetAllTasks().then(async (res)=>{
      if([200, 201].includes(res.status)){
        dispatch(getAllTasksAction(res.data));
      }
    }).catch(e=>console.log('loading task err : ', e));
  }, [dispatch]);
  return (
      <>
        <Router>
        <Sidebar showPopup={setPopup} />
        <main className="h-screen w-full ml-7 p-5 bg-white overflow-y-scroll grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* on appelle ce sidebar a ce niveau pour quil soit toujours present sur toutes les routes */}
          <Routes>
            <Route pathname="home" path="" element={<Home />} />
            <Route pathname="anytime" path="/anytime" element={<Anytime />} />
            <Route pathname="upcoming" path="/upcoming" element={<Upcoming />} />
            <Route pathname="today" path="/today" element={<Today />} />
            <Route pathname="someday" path="/someday" element={<Someday />} />
            <Route pathname="trash" path="/trash" element={<Trash />} />
          </Routes>
        </main>
      </Router>

      {popup && 
        <AddTaskPopup showPopup={setPopup}/>
      }
      </>
  );

}

export default App;
