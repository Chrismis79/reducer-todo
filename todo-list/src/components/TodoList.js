import React from 'react';

import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <div>
            {props.todoItems.map(item => (
                <TodoItem key={item.id}
                          item={item}
                          toggleItem={props.toggleItem}/>
            ))}
        </div>
    );
};
export default TodoList;