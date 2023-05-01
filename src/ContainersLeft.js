import React, {useContext} from 'react';
import {GameContext} from "./Context";
import Item from "./Item";


export default function ContainersLeft() {
    const {startGameLevel} = useContext(GameContext);

    return(
        <ul className='container_left'>
            {startGameLevel.map(elem => <Item 
                                            key={elem.id} 
                                            element = {elem} 
                                            field = 'start' />)}
        </ul>
    )
}