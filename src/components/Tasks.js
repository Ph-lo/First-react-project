import arrowUp from '../assets/arrow-up.png';
import arrowDown from '../assets/arrow-down.png'
import '../styles/Tasks.css'
import $ from 'jquery'

function Tasks({ todos, action }) {

    const tasks = todos;
    const displaySubc = (e) => {
        e.preventDefault();
        let index = e.target.previousElementSibling.getAttribute('data-index');

        if (index === null) {
            index = e.target.previousElementSibling.firstChild.getAttribute('data-index');
        } else {
            index = e.target.previousElementSibling.getAttribute('data-index');
        }
        tasks.map((elem) => {
            if (elem.id === parseInt(index) && elem.displaySub === false) {
                elem.displaySub = true;
            } else {
                elem.displaySub = false;
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        action({ tasks });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        const index = e.target.parentElement.firstChild.getAttribute('data-index');

        const i = tasks.findIndex(item => item.id === parseInt(index));
        tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        action({ tasks });
    };

    const handleChange = (e) => {
        const index = e.target.getAttribute('data-index');
        const i = tasks.findIndex(item => item.id === parseInt(index));
        if (tasks[i].done === false) {
            tasks[i].done = true;
            e.target.nextElementSibling.style.textDecorationLine = 'line-through';
        } else {
            tasks[i].done = false;
            e.target.nextElementSibling.style.textDecorationLine = 'none';
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const scrolling = () => {
        const scroll = $('#todo-list').scrollTop();
        if (scroll > 0) {
            $('.banner').addClass('scroll-active');
        } else {
            $('.banner').removeClass('scroll-active');
        }
    };

    return (
        <div id='todo-list' onScroll={scrolling} >
            <form>
                <ul id='tasks-ul'>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <div className='task-header'>
                                <input type='checkbox' name='checkbox' data-index={task.id} data-display={task.done} defaultChecked={task.done} onChange={handleChange} />
                                {(task.title !== "") ? <p style={task.done ? { textDecorationLine: 'line-through' } : {}} onClick={displaySubc}>{task.title}</p> : null}
                                <button className='delete-btn' type='submit' onClick={handleSubmit}>&#10005;</button>
                            </div>
                            {(task.displaySub && task.todo) ? <div className='todo-content-container'><p className='todo-content'>{task.todo}</p></div> : null}
                            {(task.todo) ? <img src={(task.displaySub) ? arrowUp : arrowDown} alt='arrow icon' onClick={displaySubc} /> : null}


                        </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}



export default Tasks