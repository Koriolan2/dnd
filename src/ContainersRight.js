import React, {useContext} from 'react';
import { GameContext } from './Context';
import Item from './Item';

export default function ContainersRight({elem}) {
      const {endGameLevel} = useContext(GameContext);

      return(
        <ul className='container_right'>
           {endGameLevel.map(elem => <Item 
                                          key={elem.id} 
                                          element = {elem}
                                          field = 'end'
                                      />)}
        </ul>
    )
}