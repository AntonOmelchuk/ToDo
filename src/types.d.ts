interface Task {
    id: string;
    title: string;
    completed: boolean;
}

interface Todolist {
    tasks: any[];
    id: string;
    title: string;
}

interface State {
    todolists: Todolist[];
}
