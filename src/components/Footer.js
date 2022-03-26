import React, { useState } from "react";
import '../styles/Footer.css';
import { Modal } from './Modal';

function Footer({tasks, action}) {
    
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
        document.getElementsByClassName('main')[0].style.filter = 'blur(1px)';
    };
    return (
        <div className='footer'>
            <button id="add-btn" className='add-btn' type='submit' onClick={openModal}>&#65291;</button>
            {showModal ? <Modal todoList={tasks} setShowModal={setShowModal} setTasks={action} /> : null}
        </div>
    )
}

export default Footer