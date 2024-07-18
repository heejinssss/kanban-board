import React from 'react';
import { _Task, Task_Remove } from './assets/css/Task.css';

function Task({ no, name, done }) {
    const [check, setCheck] = useState(true);
    
    return (
        <li className={_Task}>
            <input
                type='checkbox'
                checked={check}
                onChange={() => setCheck(!check)}
            />
                {name}
            <a href="#" className={Task_Remove} />
        </li>
    );
};

export default Task;