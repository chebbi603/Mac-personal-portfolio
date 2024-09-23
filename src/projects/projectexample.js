import "./projectexample.css"
import ProjectTemplate from "./projecttemplate";
import projects from "./projects.json"
import MediaQuery from "react-responsive";
import ContentCreation from "../contentcreation/contentcreation"

function ProjectsList() {


    return(
        <div className="projects-container" >
            <div className="projects-textcontainer">
                <div className="projects-list">
                    {projects.map((p) =>{
                        return(<ProjectTemplate key={p.id} id={p.id} name={p.projectName} hint={p.projectInfo} desc={p.projectDesc} images={p.projectImages} placeholders={p.projectPlaceholders}/>)
                    })}
                    <ContentCreation/>
                </div>
            </div>
            <div><p className="myloc">PROJECTS</p></div>
        </div>
    )
}
export default ProjectsList;