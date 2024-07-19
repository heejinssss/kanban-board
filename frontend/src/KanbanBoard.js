import React from 'react';
import { Kanban_Board } from './assets/css/KanbanBoard.css';
import CardList from './CardList';
import cards from './assets/json/data';

function KanbanBoard() {
    return (
        cards && (
            <div className={Kanban_Board}>
                <CardList
                    key={'ToDo'}
                    title={'ToDo'}
                    cards={cards.filter((card) => card.status === 'ToDo')}
                    status={'ToDo'}
                />
                <CardList
                    key={'Doing'}
                    title={'Doing'}
                    cards={cards.filter((card) => card.status === 'Doing')}
                    status={'Doing'}
                />
                <CardList
                    key={'Done'}
                    title={'Done'}
                    cards={cards.filter((card) => card.status === 'Done')}
                    status={'Done'}
                />
            </div>
        )
    );
}

export default KanbanBoard;
