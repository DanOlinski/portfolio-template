import React from "react";
import "./About.scss"
import "./Content.scss"

export default function About() {

//Below is the code for the "about" section of the web app
  return (
    <div className="container">

      <div className="tittle">
        <div className="tittle-text">About</div>
        <div className="tittle-line-about"></div>
      </div>


      <div className="about-text">
      <div className="vert-subcontainer-group-inner">
      Paragraph 1 
      <div className="text-paragraph">.</div>
      Paragraph 2 
      <div className="text-paragraph">.</div>
      Paragraph 3
</div>
</div>

    </div>
  );
}