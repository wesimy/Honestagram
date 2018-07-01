import React from 'react';
import _ from 'lodash';
import NotificationItem from '../NotificationItem/NotificationItem';

export default ({ datasource = {}, orderby = 'date', order='desc' , updateNotification}) => {
    
    const notesMapper = _.map(datasource,
        (item, id) => {
            const note = { nid: id, ...item};
            return note
        });


        const notesList = _.map(_.orderBy(notesMapper,[orderby],[order]),
    
        (item, id) => {
            
            return(
                <li key={id}  >
                <NotificationItem  datasource={item} updateNotification={updateNotification}/>
                </li>
            );
        });

        
    return (
        <ul className="uk-list">
            {notesList}
        </ul>
    )
}
