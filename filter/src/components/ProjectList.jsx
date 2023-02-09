const ProjectList = (props) => {

    return (
        <ul className="project-list">
            {props.projects.map((project,i)=>{
                return <li key={`proj${i}`}><img src={project.img} /></li>
            })}
        </ul>
    )
}
export default ProjectList;