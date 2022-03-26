import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import '../styles/Modal.css'
import $ from 'jquery';

export const Modal = ({todoList, setShowModal, setTasks}) => {
    // console.log(todoList);
    const tasks = todoList;
    // const [inputs,  setInputs] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = (e.target.title.value !== "") ? e.target.title.value : false;
        const content = (e.target.content.value !== "") ? e.target.content.value : false;
        const tasksList = document.getElementById('tasks-ul');
        const dataIndex = (tasksList.lastChild !== null ) ? parseInt(tasksList.lastChild.firstChild.firstChild.getAttribute('data-index'))+1 : 0;

        if (title !== false) {
            tasks.push({
                "id": dataIndex,
                "title": title,
                "todo": content,
                "done": false,
                "displaySub": false
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            setTasks({tasks});
            setShowModal(false);
            document.getElementsByClassName('main')[0].style.filter = 'blur(0px)';
        } else {
            $(e.target.title).css({outline: '0 solid #ca5e5e'}).animate({
                outlineWidth: 4
            }, 200);
            e.target.title.placeholder = 'Enter a title';
        }
        // console.log(tasks);
    }
    const setOutline = () => {
        // console.log('yo');
        $('.form-input').css({outline: '4 solid #ca5e5e'}).animate({
            outlineWidth: 0
        }, 200)
    }
    const modalRef = useRef();
    
    const closeModal = (e) => {
        // console.log(e.target);
        if (e.target === document.getElementsByClassName('close-modal')[0]) {
            setShowModal(false);
            // console.log();
            document.getElementsByClassName('main')[0].style.filter = 'blur(0px)';
        }
    };

    // render the modal in the portal div (#modal)
    return ReactDom.createPortal(
        <>
        <div className='modal-background-shade'></div>
        <div className='modal-container' ref={modalRef} onClick={closeModal}>
            <div className='Modal'>
                <button className='close-modal' onClick={() => setShowModal(false)}>&#10005;</button>
                <form onSubmit={handleSubmit}>
                    <h3>New task</h3>
                    <input className='form-input' type='text' name='title' placeholder='Title...' onChange={setOutline} />
                    <textarea className='form-textarea' name='content' placeholder='Task...'>
                    </textarea>
                    <br />
                    <div className='add-container'>
                        <button className='new-task' type='submit'>+</button>
                    </div>
                </form>    
            </div>
        </div>
        </>,
        document.getElementById('modal')
    );
};