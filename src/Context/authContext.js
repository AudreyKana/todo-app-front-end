// import { createContext, useState, useEffect } from "react";
// import jwt_decode from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export default AuthContext;

// export const AuthProvider = ({ children }) => {
//   let [token, setToken] = useState(() =>
//     localStorage.getItem("token")
//       ? JSON.parse(localStorage.getItem("token"))
//       : null
//   );
//   let [user, setUser] = useState(() =>
//     localStorage.getItem("token")
//       ? jwt_decode(localStorage.getItem("token"))
//       : null
//   );
//   let [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   let loginUser = async (e) => {
//     e.preventDefault();
//     let response = await fetch("http://192.168.33.11:8000/token/", {
//       method: "POST",
//       headers: {
//         "content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: e.target.username.value,
//         password: e.target.password.value,
//       }),
//     });
//     let data = await response.json();

//     if (response.status === 200) {
//       setToken(data);
//       setUser(jwt_decode(data.access));
//       localStorage.setItem("token", JSON.stringify(data));
//       navigate("/");
//     } else {
//       alert("Login ou mot de passe incorrect");
//     }
//   };

//   let logoutUser = () => {
//     setToken(null);
//     setUser(null);
//     localStorage.removeItem("token");
//     navigate("/Login");
//   };

//   let updateToken = async () => {
//     console.log("Update token called");
//     let response = await fetch("http://192.168.33.11:8000/token/refresh/", {
//       method: "POST",
//       headers: {
//         "content-Type": "application/json",
//       },
//       body: JSON.stringify({ refresh: token.refresh }),
//     });
//     let data = await response.json();

//     if (response.status === 200) {
//       setToken(data);
//       setUser(jwt_decode(data.access));
//       localStorage.setItem("token", JSON.stringify(data));
//     } else {
//       logoutUser();
//     }
//   };

//   let contextData = {
//     user: user,
//     loginUser: loginUser,
//     logoutUser: logoutUser,
//   };

//   useEffect(() => {
//     let fourMinutes = 1000 * 60 * 4;
//     let interval = setInterval(() => {
//       if (token) {
//         updateToken();
//       }
//     }, fourMinutes);
//     return () => clearInterval(interval);
//   }, [token, loading]);

//   return (
//     <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
//   );
// };
