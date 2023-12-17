import React, { useState } from 'react';
import * as constants from '../../constants';
import { AiOutlineArrowRight } from "react-icons/ai";

export function Button(props) {
    const [hovered, setHovered] = useState(false);

    const buttonStyle = {
        color: constants.colors.secondary,
        fontSize: '16px',
        fontWeight: '600',
        cursor:'pointer',
        display:'flex',
        height:'1.5rem',
        ...props.style
    };
    const textStyle = { 
        borderBottom: hovered ? '1px solid ' + constants.colors.chip : '',
    }
    const arrowStyle = {
        marginTop:'0.1rem',
        marginLeft: hovered ? '1rem' : '0.4rem',
        transition: 'margin-left 200ms'
    }

    return (
        <div 
            style={buttonStyle}
            onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=>setHovered(false)}
            onClick={props.onClick}
        >
            <div style={textStyle}>
                {props.text}
            </div>
            <AiOutlineArrowRight style={arrowStyle} size={16}/>
        </div>
        
    );
}
