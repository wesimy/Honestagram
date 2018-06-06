import React from 'react';
//import PropTypes from 'prop-types';
import _ from 'lodash';
import WallItem from '../WallItem/WallItem';

export default ({ datasource = {}, orderby = 'date', order='desc' }) => {
    
    const wallList = _.map(datasource,
        (item, id) => {
            const wall = { id: id, ...item};
            return(
                <li id={id} key={id} >
                <WallItem id={id} datasource={wall} />
            </li>
            );
        });

    return (
        <ul className="uk-list">
            {wallList}
        </ul>
    )
}
