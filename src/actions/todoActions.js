import {
    ADD_TASK,
    ADD_TODOLIST,
    DELETE_TASK,
    DELETE_TODOLIST,
    SET_TASKS,
    SET_TODOLISTS,
    UPDATE_TASK,
    UPDATE_TODO_TITLE
} from './types';
import {api} from '../api';

export const updateTaskAC = (taskId, obj, todolistId) => {
    return { type: UPDATE_TASK, taskId, obj, todolistId };
};

const deleteTodolistAC = todolistId => {
    return {
        type: DELETE_TODOLIST,
        todolistId: todolistId
    };
};

const deleteTaskAC = (todolistId, taskId) => {
    return {
        type: DELETE_TASK,
        todolistId,
        taskId
    };
};

const addTaskAC = (newTask, todolistId) => {
    return { type: ADD_TASK, newTask, todolistId };
};

const setTasksAC = (tasks, todolistId) => {
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
        dispatch(setTasksAC(response.data.items, id));
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

export const addTaskThunk = (id, title) => async dispatch => {
    try {
        const response = await api.addTask(id, title);
        dispatch(addTaskAC(response.data.data.item, id))
    } catch(err) {

    }
};

export const deleteTodoThunk = id => async dispatch => {
    try {
        await api.deleteTodo(id);
        dispatch(deleteTodolistAC(id))

    } catch(err) {

    }
};

export const deleteTaskThunk = (taskId, id) => async dispatch => {
    try {
        await api.deleteTask(taskId);
        dispatch(deleteTaskAC(id, taskId))
    } catch(err) {

    }
};

