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
    getTodo(id: string) {
        return instance.get(`${id}/tasks`);
    },
    createTodo(title: string) {
        return instance.post('', {title});
    },
    addTask(id: string, title: string) {
        return instance.post(`${id}/tasks`, {title});
    },
    updateTodoTitle(id: string, title: string) {
        return instance.put(`${id}`, {title});
    },
    deleteTodo(id: string) {
        return instance.delete(`${id}`);
    },
    deleteTask(taskId: string) {
        return instance.delete(`tasks/${taskId}`);
    },
    changeTask(taskId: string, task: any, todoId: string) {
        return instance.put(`${todoId}/tasks/${taskId}`, task);
    }
};
