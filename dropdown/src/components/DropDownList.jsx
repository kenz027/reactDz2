import { useState } from "react";
import DropDownItem from "./DropDownItem";

export default function DropDownList(props){
    const [selectedElement, setSelectedElement] = useState(0);
    return (
        <ul data-id="dropdown" className="dropdown">
            {props.menus.map((title,i)=><DropDownItem onSelect={(id)=>setSelectedElement(id)} title={title} id={i} selectedElement={selectedElement} key={`menuItem${i}`} />)}
        </ul>
    )
}