import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import Todo from './components/TodoComponents/Todo'


const TodoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
  task: 'outside of app',
  id: '',
  completed: ''
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      TodoDataOnState: TodoData,
      TodoData: {
        task: '',
        id: '',
        completed: ''
      }
    }
  }

  handleChanges = event => {
    console.log(event.target.value);
    this.setState({
      TodoData: {
        ...this.state.TodoData,
        [event.target.name]: event.target.value
      }
    });
  };


  addTask = event => {
    event.preventDefault();
    console.log(this.state.TodoData.task)
    this.setState({
      TodoDataOnState: [...this.state.TodoDataOnState, this.state.TodoData],
    });
  };


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
        <h2>ToDo:</h2>
        {this.state.TodoDataOnState.map(TodoData => (
          <TodoList TodoData={TodoData.task} key={TodoData.task} />
        ))}
        <TodoForm handleChanges={this.handleChanges} addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
