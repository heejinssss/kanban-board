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
            const response = await fetch(`/api/task/${no}`);

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
            {showContent && <TaskList tasks={tasks} />}
        </div>
    );
}

export default Card;
