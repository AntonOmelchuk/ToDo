import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/todo-lists/',
    withCredentials: true,                                       // передавай с запросом куки для запрашиваемого домена
    headers: {
        "API-KEY": "cc9f7e6f-c96d-4eb2-97ef-b9ab9495f033"
    } // специальный ключ в заголовках передаём
});

export const api = {
    getTodos() {
        return instance.get('')
    },
    createTodo(title) {
        return instance.post('',{title} )
    },
    addTask(id, title) {
        return instance.post(`${id}/tasks`,{title})
    },
    deleteTodo(id) {
        return instance.delete(`${id}`)
    },
    deleteTask(taskId) {
        return instance.delete(`tasks/${taskId}`)
    }
}