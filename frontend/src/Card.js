import React, { useEffect, useState } from 'react';
import { _Card, Card_Title, Card_Title_Open } from './assets/css/Card.css';
import TaskList from './TaskList';

function Card({ no, title, description }) {
    const [showContent, setShowContent] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, [setTasks]);

    /* [S] fetchTasks API */
    const fetchTasks = async () => {
        try {
            const response = await fetch(`/api/task/${no}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: null,
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(`API request Error ${json.message}`);
            } else {
                setTasks(json.data);
            }
        } catch (err) {
            console.error(err);
        }
    };
    /* [E] fetchTasks API */

    /* [S] addTask API */
    const addTask = async (task) => {
        try {
            const response = await fetch('/api/addTask', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(`API request Error ${json.message}`);
            }
            setTasks([json.data, ...tasks]);
        } catch (err) {
            console.error(err);
        }
    };
    /* [E] addTask API */

    /* [S] updateTask API */
    const updateTask = async (task) => {
        try {
            const response = await fetch(`/api/task/${task.no}`, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(`API request Error ${json.message}`);
            }
            setTasks((prevTasks) => prevTasks.map((e) => (e.no === json.data.no ? json.data : e)));
        } catch (err) {
            console.error(err);
        }
    };
    /* [E] updateTask API */

    /* [S] deleteTask API */
    const deleteTask = async (no) => {
        try {
            const response = await fetch(`/api/task/${no}`, {
                method: 'delete',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: null,
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(json.message);
            }

            setTasks(tasks.filter((e) => e.no !== no));
        } catch (err) {
            console.error(err);
        }
    };
    /* [E] deleteTask API */

    return (
        <div className={_Card}>
            <div
                className={[Card_Title, `${showContent && Card_Title_Open}`].join(' ')}
                // onClick={() => {setShowDetail(!showContent);}}
                onClick={async () => {
                    setShowContent(!showContent);
                }}
            >
                {title}
            </div>
            <div>{description}</div>
            {showContent && <TaskList
                                no={no}
                                tasks={tasks}
                                addTask={addTask}
                                updateTask={updateTask}
                                deleteTask={deleteTask} />}
        </div>
    );
}

export default Card;
