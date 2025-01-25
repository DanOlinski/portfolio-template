import React from "react";
import "./Skills.scss"
import "./Content.scss"
import globalStates from '../hooks/globalStates';

//This component displays all of the skills for the portfolio web page
export default function Skills() {
  const { skills, setSkills } = globalStates()

  //when the text is clicked change the state to "true" or "false". This state is used to expand or collapse this component.
  const handelClick = () => {
    setSkills(!skills)
  }

  
  if(skills){
    return (
      <div className="container">
  
        <div className="tittle" onClick={handelClick}>
          <div className="tittle-text">Skills</div>
          <div className="tittle-line-skills"></div>
        </div>
  
        <div className="tittle-subtittle">
        Category 1
        </div>
  
        <div className="tittle-subtittle">
        Category 2
        </div>
  
        
        <div className="tittle-close" onClick={handelClick}>Close</div>
      </div>
    );
  }

  if(!skills){
    return (
      <div className="container">
  
        <div className="tittle" onClick={handelClick}>
          <div className="tittle-text">Skills</div>
          <div className="tittle-line-skills"></div>
        </div>
  

  
  
      </div>
    );
  }
}