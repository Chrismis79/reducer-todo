export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_TODO = 'CLEAR_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const initState = {
    todoItems: [
        {
            id: Date.now(),
            item: 'Add Todos',
            completed: true,
        }

    ]
};

export const todoReducer = (todoState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            let newItem = {
                id: Date.now(),
                item: action.payload,
                completed: false
            };
            return {
                ...todoState,
                todoItems: [...todoState.todoItems, newItem]
            };
        case TOGGLE_COMPLETED:
            let updatedTodos = todoState.todoItems.map(item => {
                if(item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }else {
                    return item;
                }
            });
                return {
                    ...todoState,
                    todoItems: updatedTodos
                };
                
        case CLEAR_TODO:
            return {
                ...todoState,
                todoItems: todoState.todoItems.filter(item => !item.completed)
            };
            default:
                return todoState;        
    }
}