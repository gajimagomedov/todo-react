import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: this.props.initialData
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleStatusChange(id){

   let todos = this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: todos
    })
  }

  nextId(){
    this._nextId = this._nextId || 4;
    return this._nextId++;
  }

  handleAdd(title){
  
    let todo = {
      id: this.nextId(),
      title: title,
      completed: false
    }

    let todos = [...this.state.todos, todo];

    this.setState({todos});
  }

  handleEdit(id, title){
    let todos = this.state.todos.map(todo => {
        if(todo.id === id){
          todo.title = title;
         }
        return todo;
      });
      
      this.setState({todos});
  }

  handleDelete(id){
    let todos = this.state.todos.filter(function(todo){
      return todo.id !== id;
    });

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <main>
        <Header title={'React-Todo'} todos={this.state.todos} />
        <section className = "todo-list">

          {this.state.todos.map(todo => 
              <Todo key={todo.id} 
                    id={todo.id}
                    title={todo.title} 
                    completed={todo.completed} 
                    onStatusChange={this.handleStatusChange}
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}
              />)}
        </section>
        <Form onAdd={this.handleAdd} />
      </main>
    );
  }
}

App.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired
};

export default App;
