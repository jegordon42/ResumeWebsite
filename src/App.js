import { useEffect, useState, createRef } from 'react';
import { SideBar } from './components/SideBar'
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';

const appStyle = {
  height: '100%',
  width: '100%',
};
const sidebarContainerStyle = {
  height: '100%',
  width: '50%',
  position:'fixed',
  top:0,
  left:0,
  display: 'flex',
  justifyContent:'flex-end',
  paddingTop:'5rem',
};
const contentContainerStyle = {
  overflow: 'auto',
  paddingRight:'6rem',
  paddingBottom:'6rem',
};

function App() {
  const [activeSection, setActiveSection] = useState('ABOUT');
  const sectionRefs = {
    about : createRef(),
    experience : createRef(),
    projects : createRef(),
    skills : createRef(),
  };

  useEffect(()=>{
    window.onscroll = (e)=> {
      if(sectionRefs.experience.current && sectionRefs.experience.current.getBoundingClientRect().top > 100){
        setActiveSection('ABOUT');
      }else if(sectionRefs.projects.current && sectionRefs.projects.current.getBoundingClientRect().top > 100){
        setActiveSection('EXPERIENCE');
      }else if(sectionRefs.skills.current && sectionRefs.skills.current.getBoundingClientRect().bottom > window.innerHeight + 5){
        setActiveSection('PROJECTS');
      }else{
        setActiveSection('SKILLS');
      }
    };
  }, [activeSection])

  return (
    <div style={appStyle}>
      <div style={sidebarContainerStyle} >
        <SideBar sectionRefs={sectionRefs} activeSection={activeSection}/>
      </div>
      <div style={{display: 'flex'}}>
        <div style={{flex:1}}/>
        <div style={{flex:1, ...contentContainerStyle}} >
          <div style={{maxWidth: '40rem'}} >
            <About sectionRef={sectionRefs.about}/>
            <Experience sectionRef={sectionRefs.experience}/>
            <Projects sectionRef={sectionRefs.projects}/>
            <Skills sectionRef={sectionRefs.skills}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;