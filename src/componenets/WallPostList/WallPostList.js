import React from 'react';
//import PropTypes from 'prop-types';
import _ from 'lodash';
import WallPostItem from '../WallPostItem/WallPostItem';

export default ({ isOwner, datasource = {}, orderby = 'date', order='desc', makePrivate }) => {
    
    //const postList = _.map(_.orderBy(datasource,[orderby],[order]),
    const postMapper = _.map(datasource,
        (item, id) => {
            const post = { pid: id, ...item};
            return post
        });


        const postList = _.map(_.orderBy(postMapper,[orderby],[order]),
    
        (item, id) => {
            const post = { pid: id, ...item};
            return(
                <li id={id} key={id}  >
                <WallPostItem isOwner={isOwner} datasource={post} makePrivate={makePrivate}/>
                </li>
            );
        });

        
    return (
        <ul className="uk-list">
            {postList}
        </ul>
    )
}
