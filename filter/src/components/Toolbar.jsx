const ToolBar = (props) => {
    return (
        <ul className="toolbar">
            {props.filters.map((filter, i)=>{
                return <li className={props.selected === filter ? 'active' : ''} key={`filt${i}`} onClick={()=>props.onSelectFilter(filter)}>{filter}</li>
            })}
        </ul>
    )
}
export default ToolBar;