import React, { useEffect, useState } from 'react';
import { Kanban_Board } from './assets/css/KanbanBoard.css'
import CardList from './CardList.js'
import data from './assets/json/data';

function KanbanBoard() {
    
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(data);
    }, []);

    return (
        cards && (
            <div className={Kanban_Board}>
                <CardList
                    key={'To Do'}
                    title={'To Do'}
                    cards={cards.filter(card => card.status === 'ToDo')}
                />
                <CardList
                    key={'Doing'}
                    title={'Doing'}
                    cards={cards.filter(card => card.status === 'Doing')}
                />
                <CardList
                    key={'Done'}
                    title={'Done'}
                    cards={cards.filter(card => card.status === 'Done')}
                />                                
            </div>
        )
    );
}

export default KanbanBoard;