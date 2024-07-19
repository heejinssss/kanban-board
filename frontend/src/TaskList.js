import React from 'react';
import { Input_Add_Task, Task_List } from './assets/css/TaskList.css';
import Task from './Task';

function TaskList({ tasks }) {
    return (
        <div className={Task_List}>
            <ul>
                {
                    tasks.map((e, index) => (
                        <Task
                            key={index}
                            no={e.no}
                            name={e.name}
                            done={e.done}
                        />))}
            </ul>
            <input className={Input_Add_Task} type="text" placeholder={'태스크 추가'} />
        </div>
    );
}

export default TaskList;
