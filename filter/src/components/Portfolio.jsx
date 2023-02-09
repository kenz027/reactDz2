import { Component} from "react";
import ProjectList from "./ProjectList";
import ToolBar from "./Toolbar";
/* const Portfolio = (props) => {
    const [selected, setSelected] = useState('All');
    const filteredProjects = selected === 'All' ? props.projects : props.projects.filter(proj=>proj.category === selected);
    return (
      <>
        <ToolBar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={selected}
          onSelectFilter={(filter) => setSelected(filter)}
        />
        <ProjectList projects={filteredProjects}  />
      </>
    );
} */
class Portfolio extends Component {
    constructor(props){
        super(props)
        this.state = {selected: 'All'}
    }
    render() {
        const filteredProjects = this.state.selected === 'All' ? this.props.projects : this.props.projects.filter(proj=>proj.category === this.state.selected);
        return (
            <>
                <ToolBar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={this.state.selected}
                onSelectFilter={(filter) => this.setState({selected: filter})}
                />
                <ProjectList projects={filteredProjects}  />
            </>
        )
    }
}
export default Portfolio;
