import * as constants from '../../constants';
import { TimelineEntry } from '../common/TimelineEntry';
import { BsTriangleFill } from "react-icons/bs";

const sectionStyle = {
    paddingTop: '5rem',
};
const timelineStyle = {
    display: 'grid',
    columnGap: '2rem',
    gridTemplateColumns: '12rem 1rem auto'
}

const lineStyle = {
    borderLeft: '3px solid ' + constants.colors.primary, 
    paddingBottom:'1.5rem'
}

const topArrowStyle = {
    marginLeft:'-0.7rem', 
    marginTop:'-0.5rem', 
    color:constants.colors.primary
}

const TimelineTop = () => (
    <>
        <div/>
        <div style={lineStyle}>
            <BsTriangleFill size={20} style={topArrowStyle}/>
        </div>
        <div/>
    </>
)

export function Experience(props) {
    
    return (
        <div style={sectionStyle} ref={props.sectionRef}>
            {/* <h3 style={{paddingBottom:'5rem'}}>
                Experience
            </h3> */}
            <div style={timelineStyle}>
                <TimelineTop/>
                {constants.EXPERIENCE.experiences.map((experience) => 
                    <TimelineEntry experience={experience}/>
                )}
            </div>
        </div>
    );
}
