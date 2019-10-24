import {ADD_TASK, ADD_TODOLIST, DELETE_TASK, DELETE_TODOLIST} from "./types";
import {CHANGE_TASK} from "../types";

export const addTodolist = newTodolist => {
    return {
        type: ADD_TODOLIST,
        payload: newTodolist
    }
};

export const addTask = (newTask, todoId) => {
    return {
        type: ADD_TASK,
        payload: {newTask, todoId}
    }
};

export const deleteTodolist = id => {
    return {
        type: DELETE_TODOLIST,
        payload: id
    }
};

export const deleteTask = (taskId, todoId) => {
    return {
        type: DELETE_TASK,
        payload: {taskId, todoId}
    }
};

export const changeTask = (taskId, obj, todoId) => {
    console.log(obj)
    return {
        type: CHANGE_TASK,
        payload: {taskId, obj, todoId}
    }
};