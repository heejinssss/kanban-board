import React from 'react';
import { Card_List } from './assets/css/CardList.css';
import Card from './Card';

function CardList({ cards, status }) {
    return (
        <div className={Card_List}>
            <h1>{status}</h1>
            {
                cards.map((e) =>
                    <Card
                        key={e.no}
                        no={e.no}
                        title={e.title}
                        description={e.description}
                        tasks={e.tasks} 
                    />)
            }
        </div>
    );
};

export default CardList;
