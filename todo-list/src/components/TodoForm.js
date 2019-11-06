import React, {useState} from 'react';


const TodoForm = props => {
    const [input, setInput] = useState('');
   
   const  handleChanges = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addItem(input);
        setInput('');
    };

    const clearItems = () => {
        props.clearItems();
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'
                       placeholder='Add new todo item here...'
                       value={input}
                       onChange={handleChanges}/>
                <button>Add Todo</button>
            </form>
            <button onClick={clearItems}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;