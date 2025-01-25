import React from "react";
import "./Content.scss"
import Skills from "./Skills"
import About from "./About"
import Projects from "./Projects"
import globalStates from '../hooks/globalStates';

//The "Content" section contains everything that is under the header and above the footer
export default function Content() {
  const { content, setContent } = globalStates()

  //the "content" determines what page will be displayed. If content = 'content' then the content page will be displayed, if content = 'e-mail' then the e-mail page will be displayed
  const renderContent = () => {
    if(content === 'content'){
      return(

        <div className="content">

          
          <Projects />
          <Skills />
          <About />

        </div>
            )
    }
    
  }

  return (
    <div>

       {renderContent()}
   
    
    </div>
  );
}