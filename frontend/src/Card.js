import React, { useState } from 'react';
import { _Card } from './assets/css/Card.css';
import TaskList from './TaskList.js';

function Card({ no, title, description, tasks }) {
    const [showDetail, setShowDetail] = useState(false);
    // [Error] const customClassName = `${Card_Title $`{showDetail ? Card_Title_Open : ''}`}`;

    return (
        <div className={_Card}>
            <div
                className={`Card_Title ${showDetail ? 'Card_Title_Open' : ''}`}
                onClick={() => {setShowDetail(!showDetail);}}
            >
                {title}
            </div>
            <div>
                {description}
            </div>
            {showDetail && <TaskList tasks={tasks} />}
        </div>
    );
};

export default Card;