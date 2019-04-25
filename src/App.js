import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'


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
  id: 542524956,
  completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      TodoDataOnState: TodoData,
      eachTask: {
        task: '',
        id: '',
        completed: false
      }
    }
    console.log(this.state.TodoDataOnState)
  }

  handleChanges = event => {
    console.log(event.target.value);
    this.setState({
      eachTask: {
        ...this.state.eachTask,
        [event.target.name]: event.target.value
      }
    });
  };


  addTask = event => {
    event.preventDefault();
    if (this.state.eachTask.task.length >= 1) {
      console.log('task added', this.state.eachTask.task)
      this.setState({
        TodoDataOnState: [...this.state.TodoDataOnState, {...this.state.eachTask, id: Date.now()}],
      });
      console.log('whole task', this.state.TodoDataOnState)
    }
  };


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
        <h2>ToDo:</h2>
        {this.state.TodoDataOnState.map(eachTask => (
          <TodoList eachTask={eachTask.task} key={eachTask.id} />
        ))}
        <TodoForm handleChanges={this.handleChanges} addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
