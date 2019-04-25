// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'


function TodoList(props) {
    console.log('todolist',props)
    return (
    props.TodoData.map(eachTask => (
        
        <Todo key={eachTask.id} item={eachTask} toggleItem={props.toggleItem} />
    ))
    )
}

export default TodoList;