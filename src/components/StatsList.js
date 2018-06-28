import React from 'react';
import PropTypes from 'prop-types'

const StatsList = ({ stats }) => (
    <ul className="Ul-plain">
        {
            stats.map(({ base_stat, effort, stat }, index) => 
                <li key={index}>
                    <span>Base: {base_stat} Effort: {effort} Type: {stat.name}</span> 
                </li>
            )
        }
    </ul>
);

StatsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        base_stat: PropTypes.number.isRequired,
        effort: PropTypes.number.isRequired,
        stat: PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string
        })
    })).isRequired
}

StatsList.defaultProps = {
    stats: []
};

export default StatsList;
