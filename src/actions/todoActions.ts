import {
    ADD_TASK,
    ADD_TODOLIST,
    AddTaskAction,
    AddTodolistAction,
    DELETE_TASK,
    DELETE_TODOLIST,
    DeleteTaskAction,
    DeleteTodolistAction,
    SET_TASKS,
    SET_TODOLISTS,
    SetTasksAction,
    SetTodolistAction,
    UPDATE_TASK,
    UPDATE_TODO_TITLE,
    UpdateTaskAction,
    UpdateTodoTitleAction
} from './types';
import {api} from '../api';

const setTodolistsAC = (todolists: any[]): SetTodolistAction => {
    return {type: SET_TODOLISTS, todolists};
};

const setTasksAC = (tasks: any[], todolistId: string): SetTasksAction => {
    return {type: SET_TASKS, tasks, todolistId};
};

const addTodolistAC = (newTodolist: any[]): AddTodolistAction => {
    return {type: ADD_TODOLIST, newTodolist};
};

const addTaskAC = (newTask: string, todolistId: string): AddTaskAction => {
    return {type: ADD_TASK, newTask, todolistId};
};

const deleteTodolistAC = (todolistId: string): DeleteTodolistAction => {
    return {type: DELETE_TODOLIST, todolistId};
};

const deleteTaskAC = (todolistId: string, taskId: string): DeleteTaskAction => {
    return {type: DELETE_TASK, todolistId, taskId};
};

export const updateTodoTitleAC = (id: string, title: string): UpdateTodoTitleAction => {
    return {type: UPDATE_TODO_TITLE, id, title};
};

export const updateTaskAC = (taskId: string, obj: any, todolistId: string): UpdateTaskAction => {
    return {type: UPDATE_TASK, taskId, obj, todolistId};
};

export const getTodosThunk = () => async (dispatch: Function) => {
    try {
        const response = await api.getTodos();
        dispatch(setTodolistsAC(response.data));
    } catch (err) {}
};

export const getTasksThunk = (id: string) => async (dispatch: Function) => {
    try {
        const response = await api.getTodo(id);
        dispatch(setTasksAC(response.data.items, id));
    } catch (err) {}
};

export const addTodoThunk = (title: string) => async (dispatch: Function) => {
    try {
        const response = await api.createTodo(title);
        dispatch(addTodolistAC(response.data.data.item));
    } catch (err) {}
};

export const addTaskThunk = (id: string, title: string) => async (dispatch: Function) => {
    try {
        const response = await api.addTask(id, title);
        dispatch(addTaskAC(response.data.data.item, id));
    } catch (err) {}
};

export const deleteTodoThunk = (id: string) => async (dispatch: Function) => {
    try {
        await api.deleteTodo(id);
        dispatch(deleteTodolistAC(id));
    } catch (err) {}
};

export const deleteTaskThunk = (taskId: string, id: string) => async (dispatch: Function) => {
    try {
        await api.deleteTask(taskId);
        dispatch(deleteTaskAC(id, taskId));
    } catch (err) {}
};

export const changeTaskThunk = (taskId: string, task: any, todoId: string) => async (dispatch: Function) => {
    try {
        const response = await api.changeTask(taskId, task, todoId);
        console.log(response);
        dispatch(updateTaskAC(taskId, task, todoId));
    } catch (err) {}
};
