import { useEffect, useState, createRef } from 'react';
import { SideBar } from './components/SideBar'
import { Header } from './components/sections/Header';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';

function App() {
  const [appWidth, setAppWidth] = useState(window.innerWidth);
  const isMobile = appWidth < 1025;
  const [activeSection, setActiveSection] = useState('ABOUT');
  const sectionRefs = {
    about : createRef(),
    experience : createRef(),
    projects : createRef(),
    skills : createRef(),
  };

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
    paddingLeft: isMobile ? '2rem' : '',
    paddingRight: isMobile ? '2rem' : '6rem',
    paddingBottom: isMobile ? '2rem' : '6rem',
  };

  useEffect(()=>{
    window.onresize = function(event) {
      setAppWidth(window.innerWidth);
    };
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
      {!isMobile &&
        <div style={sidebarContainerStyle} >
          <SideBar sectionRefs={sectionRefs} activeSection={activeSection}/>
        </div>
      }
      <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
        {!isMobile &&
          <div style={{flex:1}}/>
        }
        <div style={{flex:1, ...contentContainerStyle}} >
          <div style={{maxWidth: isMobile ? '' : '40rem', display:'flex', flexDirection:'column', alignItems:'center'}}>
            {isMobile &&
              <Header />
            }
            <About sectionRef={sectionRefs.about}/>
            <Experience sectionRef={sectionRefs.experience} isMobile={isMobile}/>
            <Projects sectionRef={sectionRefs.projects} isMobile={isMobile}/>
            <Skills sectionRef={sectionRefs.skills}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;