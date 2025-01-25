import React from "react";
import "./Content.scss"
import "./Projects.scss"
import globalStates from '../hooks/globalStates';

//This section is rendered inside the "Content" component, it contains all of the projects for the portfolio
export default function Projects() {
  const { projects, setProjects } = globalStates()

    //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
    const handelClick = () => {
      setProjects(!projects)
    }

    //depending on the value of the state "projects" the app will render a collapsed component or a expanded component
    if(projects){
      return (
    
        <div className="container">
    
          <div className="tittle" onClick={handelClick}>
            <div className="tittle-text">Projects</div>
            <div className="tittle-line-projects"></div>
          </div>

          <div className="vert-subcontainer-group">
            <div className="vert-subcontainer-group-inner">
              <div className="projects-container">
    
                Project Name
    
                <div className="vert-subcontainer-line"></div>
    
                <a className="projects-text-link" href="" /*href="<your project link here>"*/ /*target="_blank"*/>
                  Link to project
                </a>

                <div className="projects-text">
                  Your project's description here
                </div>
    
              </div>
            </div>
          </div>

          <div className="tittle-close" onClick={handelClick}>Close</div>
        </div>
      );
    }

    if(!projects){
      return (
    
        <div className="container-closed" onClick={handelClick}>
    
          <div className="tittle" >
            <div className="tittle-text">Projects</div>
            <div className="tittle-line-projects"></div>
          </div>
    
        </div>
      );
    }
}