import * as constants from '../../constants';

export function About(props) {
    const sectionStyle = {
        paddingTop: '5rem',
    };
    return (
        <div style={sectionStyle} ref={props.sectionRef}>
            {constants.ABOUT.paragraphs.map(paragraph => (
                <p style={{lineHeight:1.625}}>
                    {paragraph.map(section => {
                        switch(section.type){
                            case 'text':
                                return section.text
                            case 'bold':
                                return (<b style={{color:'white'}}>{section.text}</b>);
                            case 'link':
                                return (<a href={section.link}>{section.text}</a>);
                        }
                    })}
                </p>
            ))}
        </div>
    );
}
