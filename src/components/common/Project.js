import React, { useState } from 'react';
import * as constants from '../../constants';
import { Chip } from './Chip';
import { AiOutlineArrowRight } from "react-icons/ai";

export function Project(props) {
    const [hovered, setHovered] = useState(false);
    const active = props.project.link && hovered;

    const projectContainerStyle = {
        marginTop:'2rem',
        display:'flex',
        alignItems:'center',
        borderRadius:'1rem',
        backgroundColor: active ? constants.colors.backgroundGradient : '',
        cursor: props.project.link ? 'pointer' : ''
    }
    const chipsStyle = {
        display:'flex',
        flexWrap:'wrap',
        gap: '0.4rem'
    }
    const nameStyle = {
        margin:0,
        color: active ? constants.colors.chip : constants.colors.secondary,
    }
    const arrowStyle = {
        display: props.project.link ? '' : 'none',
        marginBottom: active ? '0.1rem' : '-0.2rem',
        marginLeft: active ? '0.5rem' : '0.2rem',
        transition: 'margin 200ms',
        transform: 'rotate(-45deg)',
    }
    const imageContainerStyle = {
        marginLeft: props.project.align == "right" ? '1rem' : '', 
        marginRight: props.project.align == "left" ? '1rem' : '', 
        ...props.project.imageStyle
    }
    const imageStyle = {
        height:'100%',
        width: '100%',
        marginTop: active ? '-0.5rem' : '',
        transition: 'margin 200ms',
    }

    const onClick = () => {
        if(props.project.link){
            var rocket = document.getElementById("JoeLinks");
            rocket.classList.add("fly");
            setTimeout(()=>{
                window.open(props.project.link);
                rocket.classList.remove("fly");
            }, 2500);
        }
    }

    return (
        <div 
            style={projectContainerStyle}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={() => onClick()}
        >
            {props.project.align == "left" &&
                <div style={imageContainerStyle} >
                    <img src={props.project.image} style={imageStyle} id={props.project.name}/>
                </div>
            }
            <div>
                <h3 style={nameStyle}>
                    {props.project.name}
                    <AiOutlineArrowRight style={arrowStyle} size={16}/>
                </h3>
                <p>
                    {props.project.description.map((section) => {
                        switch(section.type){
                            case 'text':
                                return section.text
                            case 'bold':
                                return (<b style={{color:'white'}}>{section.text}</b>);
                            case 'link':
                                return (
                                    <a href={section.link} target='blank'>
                                        {section.text}
                                    </a>
                                );
                        }
                    })}
                </p>
                <div style={chipsStyle}>
                    {props.project.skills.map((skill) => 
                        <Chip text={skill}/>
                    )}
                </div>
            </div>
            {props.project.align == "right" &&
                <div style={imageContainerStyle}>
                    <img src={props.project.image} style={imageStyle}/>
                </div>
            }
        </div>
    );
}
