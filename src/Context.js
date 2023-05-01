import { createContext, useState } from "react";

export const GameContext = createContext();

export default function Context(props) {
    const s = [
      { id: 0, order:3},
      { id: 1, },
      { id: 2, order:1 },
      { id: 3, order:2 }
    ];

    const e = [
      { id: 0, },
      { id: 1, },
      { id: 2, order: '0'},
      { id: 3, }
    ];

    const [startGameLevel, setStartGameLevel] = useState(s); // масив деталей   
    const [endGameLevel, setEndGameLevel] = useState(e); // фінальний масив
    const [currentElement, setCurrentElement] = useState(null)
    const [activeField, setActiveField] = useState(null);

    // console.log('поле, де почато перетягування перетягуємо ' + activeField);
    // console.log('картка, яку перетягуємо ' + currentElement);

    function dragStartHandler(e, elem, field) {
        setCurrentElement(elem);
        setActiveField(field);
    }

    function dragOverHandler(e, elem) {
        e.preventDefault();

        if (activeField === 'start'){
            console.log('Збираємо картинку');
        }
        if (activeField === 'end') {
            console.log('Сортуємо картинки');
        }
    }

    const value = {
        startGameLevel,
        endGameLevel,
        dragStartHandler,
        dragOverHandler,
    }
    return (
        <GameContext.Provider value = {value}>        
        {props.children}        
        </GameContext.Provider>        
        )
}