import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiAddTask,
  apiDeleteTask,
  apiDeleteTempTask,
  apiRestoreDeletedTask,
  apiUpdateTask,
  apiPagination,
} from "./api";

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id, thunkAPI) => {
    const response = await apiDeleteTask(id);
    return response.data;
  }
);

export const deleteTempTask = createAsyncThunk(
  "task/deteleTempTask",
  async (id, thunkAPI) => {
    const response = await apiDeleteTempTask(id);
    return response.data;
  }
);
export const restoreDeletedTask = createAsyncThunk(
  "task/restoreDeletedTask",
  async (id, thunkAPI) => {
    const response = await apiRestoreDeletedTask(id);
    return response.data;
  }
);
export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (id, thunkAPI) => {
    const response = await apiUpdateTask(id);
    return response.data;
  }
);
export const addTask = createAsyncThunk(
  "task/addTask",
  async (id, thunkAPI) => {
    const response = await apiAddTask(id);
    return response.data;
  }
);

export const paginationApi = createAsyncThunk(
  "task/pagination",
  async (p, thunkAPI) => {
    const response = await apiPagination(p);
    return response.data;
  }
);

export const todoSlice = createSlice({
  name: "todoApp",
  initialState: {},
  reducers: {
    getAllTasksAction: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      return {
        ...state,
        results: state.results.filter((t) => t.id !== action.payload.data),
      };
      // return state.results.filter((t) => t.id !== action.payload.data);
    });
    builder.addCase(deleteTempTask.fulfilled, (state, action) => {
      state.results.map((t) => {
        if (t.id === action.payload.data) {
          t.is_deleted = true;
        }
      });
    });
    builder.addCase(restoreDeletedTask.fulfilled, (state, action) => {
      state.results.find((task) => {
        if (task.id === action.payload.data) {
          task.is_deleted = false;
        }
      });
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      const data = action.payload;
      const task = state.results.filter((task) => task.id !== data.id);
      task.push({ ...data, logo: "http://192.168.30.11:8000" + data.logo });
      // return {
      //   ...state,
      //   tasks: task,
      // };
      window.location.reload();
      return task;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      const data = action.payload;
      const task = state.results.filter((task) => task.id !== data.id);
      task.push({ ...data, logo: "http://192.168.30.11:8000" + data.logo });
      // return {
      //   ...state,
      //   tasks: task,
      // };
      window.location.reload();
      return task;
    });
    builder.addCase(paginationApi.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// export const selectUser = (state) => state.user.isAuthentificated;
