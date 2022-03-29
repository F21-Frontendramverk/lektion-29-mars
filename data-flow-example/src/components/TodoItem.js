import './TodoItem.css';

function TodoItem(props) {
    console.log(props);
    const { task, done } = props; // Här använder vi object destructuring för att plocka ut task från props-objektet
    let doneText = 'Ej klar';

    if (done) {
        doneText = 'Klar';
    }

    return (
        <li className='todo-item'>
            <span className='task'>{ task }</span>
            <span className='done'>{ doneText }</span>
        </li>
    );
}

export default TodoItem;