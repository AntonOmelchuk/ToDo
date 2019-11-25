import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/todo-lists/',
    withCredentials: true,
    headers: {
        'API-KEY': 'cc9f7e6f-c96d-4eb2-97ef-b9ab9495f033'
    }
});

export const api = {
    getTodos() {
        return instance.get('');
    },
    getTodo(id) {
        return instance.get(`${id}/tasks`);
    },
    createTodo(title) {
        return instance.post('',{title} );
    },
    addTask(id, title) {
        return instance.post(`${id}/tasks`,{title});
    },
    updateTodoTitle(id, title) {
        return instance.put(`${id}`, {title});
    },
    deleteTodo(id) {
        return instance.delete(`${id}`);
    },
    deleteTask(taskId) {
        return instance.delete(`tasks/${taskId}`);
    },
    changeTask(taskId, task, todoId) {
        return instance.put(`${todoId}/tasks/${taskId}`, task);
    }
};