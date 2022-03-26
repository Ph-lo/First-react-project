import logo from '../assets/Logo.png'
import '../styles/Banner.css'

function Banner(props) {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"
    ];
    const currentDate = new Date();
    return (
        <div className='banner'>
            {/* <h1 className='banner-title'>{title}</h1> */}
            <div className='banner-date-block'>
                <div className='banner-date-div'>
                    <h1 className='banner-date'>{currentDate.getDate()}</h1>
                    <div className='banner-month-year'>
                        <p className='banner-month'>{months[currentDate.getMonth()]}</p>
                        <p className='banner-year'>{currentDate.getFullYear()}</p>
                    </div>
                </div>
                <p className='banner-task-p'><span className='banner-task-number'>{(props.taskNbr > 1) ? props.taskNbr + " tasks" : props.taskNbr + " task"}</span></p>
            </div>
            <img src={logo} alt='logo to-do' className='banner-logo-todo' />
        </div>
    )
}

export default Banner