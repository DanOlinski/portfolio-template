import * as React from 'react';
import "./Header.scss"
import "./HeaderMenu.scss"
import HeaderMenu from "./HeaderMenu";
import globalStates from '../hooks/globalStates';

export default function Header() {
  const { content, setContent } = globalStates()
  const { dropDown, setDropDown } = globalStates()

  //This function will change the content state to 'email', the e-mail component is rendered within a conditional statement that checks if the content state is set to 'email'
  const handelEmailClick = () => {
    setContent('email')
    setDropDown(false)
  }

  //This function will change the content state value to 'content', the content component is rendered within a conditional statement that checks if the content value of state is set to 'content'
  const handelHomeClick = () => {
    setContent('content')
    setDropDown(false)
  }
  
  const handelProjectsClick = () => {
    setContent('content')

    // window.scrollTo(0,1400)
    // console.log(document.body.offsetWidth)
    setTimeout(()=> {

      if(document.body.offsetWidth >= 1214){
        window.scrollTo(0,1400)
      }
      else if(document.body.offsetWidth <= 1214 && document.body.offsetWidth > 873){
        window.scrollTo(0,1900)
      }
      else if(document.body.offsetWidth <= 873 && document.body.offsetWidth > 739){
        window.scrollTo(0,2100)
      }
      else if(document.body.offsetWidth <= 739 && document.body.offsetWidth > 586){
        window.scrollTo(0,2700)
      }
      else if(document.body.offsetWidth <= 586 && document.body.offsetWidth > 551){
        window.scrollTo(0,2800)
      }
      else if(document.body.offsetWidth <= 551 && document.body.offsetWidth > 487){
        window.scrollTo(0,3300)
      }
      else if(document.body.offsetWidth <= 487){
        window.scrollTo(0,3900)
      }

    }, 30)

    
    
    
    setDropDown(false)
  }

  //---------------------

  //when menu icon is clicked change the dropDown state to the opposite value from what it is currently (true or false). This state is used in the function renderDropDownMenu, in a conditional statement.
  const handelMenuClick = () => {
    setDropDown(!dropDown)
  }

  //this is used to set a reference value for a div (in the div you want to reference place ref="<variable>") the variable name has to end with Ref
  //this reference is used for the useEffect below to identify when the user clicks outside of a given div, so that the dropDown hook can be set to false, triggering the conditional statement in the function renderDropDownMenu and consequently closing the drop down menu
  const menuRef = React.useRef();

  //this useEffect listens for clicks on the browser, if the click occurs outside of the drop down menu (detect by the use of the variable declared above; menuRef), the dropDown state will be changed to false triggering the conditional statement in the function renderDropDownMenu and consequently closing the drop down menu
  React.useEffect(() => {

    //this function is called in the event listener below, and checks if a click occured outside of the drop down menu, it then sets the value of dropDown state to false.
    const closeMenuOnClickOutside = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropDown(false)
      }
    }

    //event listener
    document.body.addEventListener('mousedown', closeMenuOnClickOutside);

    //this function terminates the event listener in order to make the interface run more efficiently
    return () => {
      document.body.removeEventListener('mousedown', closeMenuOnClickOutside);
    }

  }, [])

  //when clicking outside of the menu element the useEffect detects that and closes the menu dropdown. If that is not set the menu will close before the action of clicking on one of the options can be executed. However after the option is executed the menu should be close and that is what the following function is designed for
  const closeMenu = () => {
    setDropDown(false)
  }

  //if the dropDown state is true this function will render the dropdown menu. else it will not
  const renderDropDownMenu = () => {
    if (dropDown) {
      return (
        <div className='dropdown'>
          <div onClick={handelHomeClick} className='dropdown-options'>Home</div>
          {/* the commented out code below is only if Projects section is placed after Skills section */}
          {/* <div className='dropdown-line'></div>
          <div onClick={handelProjectsClick} className='dropdown-options'>Projects</div> */}
          <div className='dropdown-line'></div>
          <div onClick={closeMenu} className='dropdown-options'>
            <a className='a-element' href="" /*href="<your resume link here>"*/ /*target="_blank"*/>
              <img className="icon-list" src="/portfolio/images/resume-w.png" alt='image'></img>
              Resume
            </a>
          </div>
          <div className='dropdown-line'></div>
          <div onClick={closeMenu} className='dropdown-options'>
            <a className='a-element' href="" /*href="<your github link here>"*/ /*target="_blank"*/>
              <img className="icon-list" src="/portfolio/images/github-w.png"></img>
              Github
            </a>
          </div>
          <div className='dropdown-line'></div>
          <div onClick={closeMenu} className='dropdown-options'>
            <a className='a-element' href="" /*href="<your linkedin link here>"*/ /*target="_blank"*/>
              <img className="icon-list" src="/portfolio/images/linkedin-w.png"></img>
              Linkedin
            </a>
          </div>
          <div className='dropdown-line'></div>
          <div onClick={handelEmailClick} className='dropdown-options'>
            <img className="icon-list" src="/portfolio/images/email-w.png"></img>
            Send Email
          </div>

        </div>
      )
    }

  }

  //---------------------

  return (
    <div className="header">
      <div className='header-main-div'>


        <div className='icons'>

          <a href="" /*href="<your resume link here>"*/ /*target="_blank"*/>
            <img className="icon resume" src="/portfolio/images/resume.png"></img>
          </a>
          <a href="" /*href="<your linkedin link here>"*/ /*target="_blank"*/>
            <img className="icon linkedin" src="/portfolio/images/linkedin.png"></img>
          </a>
          <a href="" /*href="<your github link here>"*/ /*target="_blank"*/>
            <img className="icon github" src="/portfolio/images/github.png"></img>
          </a>

          <img onClick={handelEmailClick} className="icon email" src="/portfolio/images/email.png"></img>

        </div>

        <img onClick={handelHomeClick} className="header-img" src="/portfolio/images/profile.jpg"></img>

        <div className='intro'>

          <div className='intro-hi'>
            This is a
            <div className='intro-name'>
              template website
            </div>
          </div>

          <div className='intro-what-i-do'>
            to activate links go to the repository
          </div>

        </div>

      </div>

      <div className='menu-composite' ref={menuRef}>

        <div onClick={handelMenuClick}>
          <HeaderMenu />
        </div>
        
        {renderDropDownMenu()}
      </div>

    </div>
  );
}
