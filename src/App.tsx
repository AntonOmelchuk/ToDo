import React, {useEffect} from 'react';
import './App.css';
import TodoList from './TodoList';
import AddNewItemForm from './AddNewItemForm';
import {connect} from 'react-redux';
import {addTodoThunk, getTodosThunk} from './actions/todoActions';
import {AppState} from './reducers';

interface Props {
    getTodosThunk: () => void;
    addTodoThunk: (title: string) => void;
}

interface MapStateToProps {
    todolists: any[];
}

type AppProps = Props & MapStateToProps;

const App: React.FC<AppProps> = ({todolists, getTodosThunk, addTodoThunk}) => {
    const addToTodoList = (title: string) => {
        addTodoThunk(title);
    };

    useEffect(() => {
        getTodosThunk();
    }, [getTodosThunk]);

    const todolist = todolists.map(tl => (
        <TodoList key={tl.id} id={tl.id} title={tl.title} tasks={tl.tasks} />
    ));

    return (
        <>
            <div>
                <AddNewItemForm addItem={addToTodoList} />
            </div>
            <div className="App">{todolist}</div>
        </>
    );
};

const mapStateToProps = (state: AppState): MapStateToProps => ({
    todolists: state.todo.todolists
});

export default connect(mapStateToProps, {addTodoThunk, getTodosThunk})(App);
