import React, { useRef } from 'react';
import { Input_Add_Task, Task_List } from './assets/css/TaskList.css';
import Task from './Task';

function    TaskList({ no, tasks, addTask, updateTask, deleteTask }) {
    const inputValue = useRef(null);

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
                            updateTask={updateTask}
                            deleteTask={deleteTask}
                        />))}
            </ul>
            <input
                className={Input_Add_Task}
                type="text"
                placeholder={'태스크 추가'}
                ref={inputValue}
                onKeyDown={(e) => {
                    if (e.key==="Enter") {
                        addTask({name: e.target.value, card_no: no});
                        inputValue.current.value = null
                    }}}
            />
        </div>
    );
}

export default TaskList;
