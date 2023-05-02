import { createContext, useState, useEffect } from "react";

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

    const [currentElement, setCurrentElement] = useState(null) // карта, яку тягнемо

    const [startActiveField, setStartActiveField] = useState(null); // поле, де почато перетягування
    const [endActiveField, setEndActiveField] = useState(null); // поле, де завершено перетягування

    const [currentFieldElem, setCurrentFieldElem] = useState(null) //клітинка, звіділя тягнемо
    const [targetFieldElem, setTargetFieldElem] = useState(null) //клітинка, де кинули

    // console.log('поле, де почато перетягування ' + startActiveField);
    // console.log('поле, де завершено перетягування ' + endActiveField);
    // console.log('картка, яку перетягуємо ' + currentElement);
    // console.log('клітинка, звідклія тягнемо ' + currentFieldElem);
    // console.log('клітинка, куди тягнемо ' + targetFieldElem);

    function dragStartHandler(e, elem, field) {
        setCurrentElement(elem.order);
        setStartActiveField(field);
        setCurrentFieldElem(elem.id)
    }

    function dragOverHandler(e, elem) {
        e.preventDefault();
        setTargetFieldElem(elem.id);
        
    }

    function dropHandler(e, elem, field){
        e.preventDefault();
        setEndActiveField(field);        
    }

    useEffect(() => {
        if (startActiveField === 'start' && endActiveField === 'end'){
            console.log('Збираємо картинку');

        }
        if (startActiveField === 'end' && endActiveField === 'end') {
            console.log('Сортуємо картинки');
        }
    });

    const value = {
        startGameLevel,
        endGameLevel,
        dragStartHandler,
        dragOverHandler,
        dropHandler
    }
    return (
        <GameContext.Provider value = {value}>        
        {props.children}        
        </GameContext.Provider>        
        )
}