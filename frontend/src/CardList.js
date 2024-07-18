import React from 'react';
import { Card_List } from './assets/css/CardList.css';
import Card from './Card.js';

function CardList({ title, cards }) {
    return (
        <div className={Card_List}>
            <h1>{title}</h1>
            {
                cards.map((card, index) =>
                    <Card key={index}
                          no={card.no}
                          title={card.title}
                          description={card.description}/>
                        )
            }
        </div>
    );
};

export default CardList;