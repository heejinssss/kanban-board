import React from 'react';
import { Input_Add_Task, Task_List } from './assets/css/TaskList.css';
import Task from './Task.js';

function TaskList({ tasks }) {
    return (
        <div className={Task_List}>
            <ul>
                {tasks?.map((task, index) => (
                    <Task key={index} no={task.no} title={task.name} done={task.done} />
                ))}
            </ul>
            <input className={Input_Add_Task} type="text" placeholder={'태스크 추가'} />
        </div>
    );
}

export default TaskList;
