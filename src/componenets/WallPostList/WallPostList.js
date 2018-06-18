import React from 'react';
//import PropTypes from 'prop-types';
import _ from 'lodash';
import WallPostItem from '../WallPostItem/WallPostItem';

export default ({ isOwner, datasource = {}, orderby = 'date', order='desc' }) => {
    
    const postList = _.map(_.orderBy(datasource,[orderby],[order]),
        (item, id) => {
            const post = { id: id, ...item};
            return(
                <li id={id} key={id} >
                <WallPostItem isOwner={isOwner} datasource={post} />
            </li>
            );
        });

    return (
        <ul className="uk-list">
            {postList}
        </ul>
    )
}
