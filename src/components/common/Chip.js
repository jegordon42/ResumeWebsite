import * as constants from '../../constants';

export function Chip(props) {

    const chipStyle = {
        borderRadius: '1rem',
        border: '1px solid ' + constants.colors.chip,
        color: constants.colors.chip,
        padding: '0.5rem 1rem 0.5rem 1rem',
        fontSize: '12px',
        fontWeight: '600'
    };

    return (
        <div style={chipStyle}>
            {props.text}
        </div>
    );
}
