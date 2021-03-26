import React from 'react';
import { card } from '../../data/menu.json';

const Grid = () => {
    console.log(card);
    return (
        <div className="grid">
            <div className="items">
                {card.map(card => {
                    console.log(card);
                    return (
                        <div className="item" key={card.id}>
                            <div className="item__side item__side--front">
                                <div className="item__description">
                                    {card.title}
                                </div>
                            </div>
                            <div
                                className={`item__side item__side--back item__side--back--${card.id}`}
                            >
                                <div className="item__description">
                                    {card.title}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Grid;
