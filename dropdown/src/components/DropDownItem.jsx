export default function DropDownItem(props){
    return (
        <li style={{color: props.id===props.selectedElement ? 'blue' : 'black'}} onClick={()=>props.onSelect(props.id)}>{props.title}</li>
    )
}