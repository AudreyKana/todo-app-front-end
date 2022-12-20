import "./App.css";
import React, { useCallback } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/loginPage";
import Register from "./pages/Login/register";
import MainLayout from "./components/Layout/mainLayout";
import Dashboard from "./pages/Dashboard/Index";
import Anytime from "./pages/Anytime/Index";
import Today from "./pages/Today/index";
import Someday from "./pages/Someday/index";
import Trash from "./pages/Trash/index";
import Upcoming from "./pages/Upcoming/index";
import PrivateRoutes from "./Routes/privateRoute";

function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <Routes>
          {/* on appelle ce sidebar a ce niveau pour quil soit toujours present sur toutes les routes */}
          <Route pathname="login" path="/login" exact element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route element={<PrivateRoutes />}>
              <Route pathname="home" path="/" exact element={<Dashboard />} />
              <Route pathname="anytime" path="/anytime" element={<Anytime />} />
              <Route
                pathname="upcoming"
                path="/upcoming"
                element={<Upcoming />}
              />
              <Route pathname="today" path="/today" element={<Today />} />
              <Route pathname="someday" path="/someday" element={<Someday />} />
              <Route pathname="trash" path="/trash" element={<Trash />} />
              <Route
                pathname="resgister"
                path="/register"
                element={<Register />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
