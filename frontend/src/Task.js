import React, { useState } from 'react';
import { _Task, Task_Remove } from './assets/css/Task.css';

function Task({ no, name, done, updateTask, deleteTask }) {
    const [check, setCheck] = useState(done);

    return (
        <li className={_Task}>
            {/* <input
                type="checkbox"
                checked={check}
                onChange={() => setCheck(!check)}
            /> */}
            <input
                type="checkbox"
                checked={done === 'Y'}
                onChange={(e) => {
                    e.preventDefault();
                    updateTask({
                        no: no,
                        name: name,
                        done: done === 'Y' ? 'N' : 'Y'
                    })
                }}
            />
            &nbsp;&nbsp;{name}&nbsp;&nbsp;
            <a href="" className={Task_Remove} 
                       onClick={(e) => {e.preventDefault(); deleteTask(no);}} />
        </li>
    );
}

export default Task;
