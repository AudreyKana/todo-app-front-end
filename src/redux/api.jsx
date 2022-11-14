import axios from "axios";

const prefixURL = "http://192.168.30.11:8000/Apirest/"

export const apiGetAllTasks = async () => axios.get(`${prefixURL}task-list/`);
export const apiAddTask = async (value) => { console.log('the log on req axios : ', value); return axios.post(`${prefixURL}task-create/`, value);} 