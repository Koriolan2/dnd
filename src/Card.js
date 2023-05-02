import React from 'react';
import { useContext } from "react";
import { GameContext } from "./Context";

export default function Card({element, field}) {
    const {dragStartHandler, dragOverHandler} = useContext(GameContext);
   
    if(element.order) {
        
        return (
            <div 
                className = "card"
                draggable
                
                
                
            > {element.order} </div>
        );
    } else {
        return null;
    }
   
}