import { createSlice } from "@reduxjs/toolkit";

const saveTasks = (state) => {
    localStorage.setItem("tasksData", JSON.stringify(state))
} 


export const todoSlice = createSlice({
    name: 'todoApp',
    initialState: {
        tasks: []
    },
    // initialState: (localStorage.getItem("tasksData") !== null) ? JSON.parse(localStorage.getItem("tasksData")) : [],
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
            saveTasks(state)
            return state
        },
        deleteTask: (state, action) => {
            const tasks = state.tasks.filter(task => task.id !== action.payload)
            state.tasks = tasks
            saveTasks(state)
            return state
        },
        updateTask: (state, action) => {
            const tasks = state.tasks.map(task => (task.id === action.payload.id) ? task = action.payload : task)
            state.tasks = tasks
            saveTasks(state)
            return state
        },
        deleteTempTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            task.deleted = true
            saveTasks(state)
            return state
        },
        restoreDeletedTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            task.deleted = false
            saveTasks(state)
            return state
        },

        getAllTasksAction: (state, action) => {
            return {tasks: action.payload};
        }
    }

});

// export const {addTask, deleteTempTask, updateTask, restoreDeletedTask, deleteTask} = todoSlice.actions

// export default todoSlice.reducer;