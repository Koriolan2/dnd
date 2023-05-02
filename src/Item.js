import { useContext } from "react";
import Card from "./Card";
import { GameContext } from "./Context";

export default function Item({element, field}) {
    const {dragStartHandler, dragOverHandler, dropHandler} = useContext(GameContext);
    
    return (
        <li data-id = {element.id}
            className="container_item"
            onDragStart = {(e) => dragStartHandler(e, element, field)} 
            onDragOver = {(e) => dragOverHandler(e, element)}
            onDrop = {(e) => dropHandler(e, element)}
        >
                <Card 
                    element = {element}
                    field = {field}
                    
                />
        </li>
    )
}