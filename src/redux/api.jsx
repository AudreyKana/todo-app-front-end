import axios from "axios";

const prefixURL = "http://192.168.30.11:8000/Apirest/";
const instance = axios.create({
  baseURL: prefixURL,
});

const AUTH_TOKEN = JSON.parse(localStorage.getItem("token"));

instance.defaults.headers.common["Authorization"] = AUTH_TOKEN
  ? "Bearer " + AUTH_TOKEN
  : "";

export const apiPagination = async (p) =>
  instance.get(`http://192.168.30.11:8000/Apirest/task-list/?p=${p}`);

export const apiGetAllTasks = async () => instance.get(`task-list/`);
export const apiAddTask = async (value) => {
  console.log("the log on req axios : ", value);
  return instance.post(`task-create/`, value);
};
export const apiDeleteTask = async (id) =>
  instance.delete(`task-delete/${id}/`);
export const apiUpdateTask = async (task) =>
  instance.put(`task-update/${task.get("id")}/`, task);
export const apiDeleteTempTask = async (id) =>
  instance.delete(`task-temporarily-delete/${id}`);
export const apiRestoreDeletedTask = async (id) =>
  instance.put(`task-restore/${id}/`);

/////////////////////////////////////

const register = (username, email, password) => {
  return instance.post("signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return instance
    .post("token/", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("token", JSON.stringify(response.data.access));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

export const authService = {
  register,
  login,
  logout,
};
