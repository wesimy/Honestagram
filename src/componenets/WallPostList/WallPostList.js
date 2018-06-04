import React from 'react';
//import PropTypes from 'prop-types';
import _ from 'lodash';
import WallPostItem from '../WallPostItem/WallPostItem';

export default ({ datasource = {}, orderby = 'date', order='desc' }) => {
    
    const postList = _.map(_.orderBy(datasource,[orderby],[order]),
        (item, id) => {
            console.log(item);
            const post = { id: id, ...item};
            return(
                <li id={id} key={id} >
                <WallPostItem datasource={post} />
            </li>
            );
        });

    return (
        <ul className="uk-list">
            {postList}
        </ul>
    )
}
