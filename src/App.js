import React from 'react';
import './App.css';
import List from "./List";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodolist} from "./actions/todoActions";

class App extends React.Component {

    nextTodoListId = 4;

    addTodoList = title => {

        let newTodoList = {
            id: this.nextTodoListId,
            title: title,
            tasks: []
        };

        this.props.addTodolist(newTodoList);

        this.nextTodoListId++;
    };

    render = () => {
        const todolists = this.props.todolists.map(tl => <List id={tl.id} title={tl.title} tasks={tl.tasks} key={tl.id} />);

        return (
            <>
                {/*<NavBar />*/}
                <div>
                   <AddNewItemForm addItem={this.addTodoList} />
                </div>
                <div className="App">
                    {todolists}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        todolists: state.todolists
    }
};

export default connect(mapStateToProps, {addTodolist})(App);

