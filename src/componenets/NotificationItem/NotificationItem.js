import React from 'react'

import './NotificationItem.css';

export default ({ datasource, updateNotification }) => {
  
  return (

<article className={`notification-item uk-card-default uk-comment uk-visible-toggle uk-padding-small post-item`}>
       
        <div className="uk-comment-body">
        
        <h4><b>{datasource.sender}</b>{` is requesting your identity on your post:`}</h4>
        <p>{datasource.content}</p>
        </div>
        <div className="uk-comment-footer">
        <div className="uk-flex uk-flex-right">
        <button  className="uk-button button-success " onClick={()=>updateNotification(datasource.nid,datasource.pid,true)}><i uk-icon="check"></i> Reveal Identity</button> 
        <button  className="uk-button button-dark" onClick={()=>updateNotification(datasource.nid,datasource.pid,false)}><i uk-icon="mask"></i> Stay Anonymous</button></div>
        </div>
    </article>


  )
}
