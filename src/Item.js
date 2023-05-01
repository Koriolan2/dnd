import { useContext } from "react";
import Card from "./Card";
import { GameContext } from "./Context";

export default function Item({element, field}) {
    const {dragOverHandler} = useContext(GameContext);
    
    return (
        <li className="container_item">
                <Card 
                    element = {element}
                    field = {field}
                    onDragOver = {(e) => dragOverHandler(e, element.order)}
                />
        </li>
    )
}