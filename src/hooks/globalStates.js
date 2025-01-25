import { create } from 'zustand';

const globalStates = create((set) => ({
    //here the defaultCategory is set to an empty array, since in this app all data coming from db is an array, if the data type is set to something different the app breaks. 
  
    dropDown: false,
    setDropDown: (newData) => {
      //set is a function that returns an object. insert a a single key&value pair, where the value is an array(incoming from db), the key name HAS to be the same as the state(in this case: dropDown)
      set(
        () => ( { dropDown: newData } )
      )
    },

    content: 'content',
    setContent: (newData) => {
      set(()=>({content: newData}))
    },
    
    projects: true,
    setProjects: (newData) => {
      set(()=>({projects: newData}))
    },

    skills: true,
    setSkills: (newData) => {
      set(()=>({skills: newData}))
    }
    
  }))
  
  export default globalStates