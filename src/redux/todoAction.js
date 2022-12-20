import { todoSlice } from "./todoSlice";

export const {
  increment,
  decrement,
  incrementByAmount,
  addTask,
  updateTask,
  getAllTasksAction,
  login,
  logout,
  selectUser,
} = todoSlice.actions;
