import React from 'react'
import moment from 'moment';
import './NotificationItem.css';

export default ({ datasource, updateNotification }) => {

  return (

<article className={`uk-card-default uk-comment uk-visible-toggle uk-padding-small post-item`}>
       
        <div className="uk-comment-body">
        {
          `${datasource.sender} is requesting your identity on your post:`
        }
        <blockquote>{datasource.content}</blockquote>
        
        </div>
        <div className="uk-comment-footer">
        <button onClick={()=>updateNotification(datasource.nid,datasource.pid,true)}>Reveal</button>
        <button onClick={()=>updateNotification(datasource.nid,datasource.pid,false)}>Stay Anonymous</button>
        </div>
    </article>


  )
}
