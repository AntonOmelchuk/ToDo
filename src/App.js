import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodolistAC, setTodolistsAC} from "./reducer";
import {api} from './api'

class App extends React.Component {

    state = {
        todolists: []
    }

    addTodoList = (title) => {
        api.createTodo(title)
            .then(res => {
                let todolist = res.data.data.item;                           // todolist, который создался на серваке и вернулся нам
                this.props.addTodolist(todolist);
            });
    };

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        api.getTodos()
            .then(res => {
                this.props.setTodolists(res.data);
            });
    };

    render = () => {
        const todolists = this.props
            .todolists
            .map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title} tasks={tl.tasks}/>)

        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTodolists: (todolists) => {
            const action = setTodolistsAC(todolists);
            dispatch(action)
        },
        addTodolist: (newTodolist) => {
            const action = addTodolistAC(newTodolist);
            dispatch(action)
        }
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;

