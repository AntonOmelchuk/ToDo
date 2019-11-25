import {
    ADD_TASK,
    ADD_TODOLIST,
    DELETE_TASK,
    DELETE_TODOLIST,
    SET_TASKS,
    SET_TODOLISTS,
    UPDATE_TASK,
    UPDATE_TODO_TITLE
} from "./types";
import {api} from "../api";

export const updateTaskAC = (taskId, obj, todolistId) => {
    return { type: UPDATE_TASK, taskId, obj, todolistId };
};

export const deleteTodolistAC = todolistId => {
    return {
        type: DELETE_TODOLIST,
        todolistId: todolistId
    };
};

export const deleteTaskAC = (todolistId, taskId) => {
    return {
        type: DELETE_TASK,
        todolistId,
        taskId
    };
};

export const addTaskAC = (newTask, todolistId) => {
    return { type: ADD_TASK, newTask, todolistId };
};

export const setTasksAC = (tasks, todolistId) => {
    return { type: SET_TASKS, tasks, todolistId };
};

const addTodolistAC = newTodolist => {
    return {
        type: ADD_TODOLIST,
        newTodolist: newTodolist
    };
};

const setTodolistsAC = todolists => {
    return {
        type: SET_TODOLISTS,
        todolists: todolists
    };
};

export const updateTodoTitleAC = (id, title) => {
    return ({
        type: UPDATE_TODO_TITLE,
        payload: {
            id,
            title
        }
    });
};

export const getTodos = () => async dispatch => {
    try {
        const response = await api.getTodos();
        dispatch(setTodolistsAC(response.data));
    } catch(err) {

    }
};

export const getTodo = id => async dispatch => {
    try {
        const response = await api.getTodo(id);
        dispatch(setTasksAC(id, response.data));
    } catch(err) {

    }
};

export const addTodo = title => async dispatch => {
    try {
        const response = await api.createTodo(title);
        dispatch(addTodolistAC(response.data.data.item));
    } catch(err) {

    }
};

