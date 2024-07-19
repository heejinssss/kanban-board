import React, { useState } from 'react';
import { _Card, Card_Title, Card_Title_Open } from './assets/css/Card.css';
import TaskList from './TaskList';

function Card({ no, title, description }) {
    const [showContent, setShowContent] = useState(false);
    const [tasks, setTasks] = useState([]);

    return (
        <div className={_Card}>
            <div
                className={[Card_Title, `${showContent && Card_Title_Open}`].join(' ')}
                // onClick={() => {setShowDetail(!showContent);}}
                onClick={async (e) => {
                    if(!showContent) {
                        try {
                            const response = await fetch('/api/card', {
                                method: 'get',
                                headers: {
                                    'Accept': 'application/json',
                                }
                            });

                            if(!response.ok) {
                                throw new Error(`${response.status} ${response.statusText}`)
                            }
                            
                            const json = await response.json();

                            if(json.result !== 'success') {
                                throw new Error(`${json.result} ${json.message}`)
                            }

                            setTasks(json.data);
                        } catch(err) {
                            console.error(err);
                        }
                    }

                    setShowContent(!showContent);
                }}
            >
            {title}
            </div>
            <div>{description}</div>
            {showContent && <TaskList tasks={tasks} />}
        </div>
    );
};

export default Card;
