import React, { useState } from 'react';
import { _Card, Card_Title, Card_Title_Open } from './assets/css/Card.css';
import TaskList from './TaskList';

function Card({ no, title, description, tasks }) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className={_Card}>
            <div
                className={[Card_Title, `${showDetail && Card_Title_Open}`].join(' ')}
                onClick={() => {setShowDetail(!showDetail);}}
            >
            {title}
            </div>
            <div>{description}</div>
            {showDetail && <TaskList tasks={tasks} />}
        </div>
    );
};

export default Card;
