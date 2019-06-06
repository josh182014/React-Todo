import React from 'react';

function Todo(props) {
    console.log('inTodo', props.item.completed)

    let classNames = "item";
    if (props.item.completed) {
      classNames += " completed";
    }

    function toggle() {
        props.toggleItem(props.item.id)
    }

    return (
        <div className='eachItem'>
            <li className={classNames} onClick={toggle}>
                {props.item.task}
            </li>
        </div>
    )
}

export default Todo;