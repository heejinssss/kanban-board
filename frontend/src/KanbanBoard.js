import React, { useEffect, useState } from 'react';
import { Kanban_Board } from './assets/css/KanbanBoard.css';
import CardList from './CardList';
// import cards from './assets/json/data';

function KanbanBoard() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchCards();
    }, [setCards]);

    /* [S] fetchCards API */
    const fetchCards = async () => {
        try {
            const response = await fetch('/api/card', {
                method: 'GET',
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
                throw new Error(`API request Error ${json.message}`);
            } else {
                setCards(json.data || []);
            }
        } catch (err) {
            console.error(err);
        }
    };
    /* [E] fetchCards API */

    return (
        cards && (
            <div className={Kanban_Board}>
                <CardList key={'ToDo'} title={'ToDo'} cards={cards.filter((card) => card.status === 'ToDo')} status={'ToDo'} />
                <CardList key={'Doing'} title={'Doing'} cards={cards.filter((card) => card.status === 'Doing')} status={'Doing'} />
                <CardList key={'Done'} title={'Done'} cards={cards.filter((card) => card.status === 'Done')} status={'Done'} />
            </div>
        )
    );
}

export default KanbanBoard;
