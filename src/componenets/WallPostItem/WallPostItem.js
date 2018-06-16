import React from 'react'
import moment from 'moment';
import './WallPostItem.css';

export default ({ datasource}) => {

  return (

<article className="uk-card-default uk-comment uk-visible-toggle uk-padding-small post-item">
        <header className="uk-comment-header uk-position-relative">
            <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                <div className="uk-width-auto">
                    <img className="uk-comment-avatar" src="https://getuikit.com/docs/images/avatar.jpg" width="70" height="70" alt="" />
                </div>
                <div className="uk-width-expand">
                    <h4 className="uk-comment-title uk-margin-remove">{(datasource.isAnonymous)? 'Anonymous' : datasource.author}</h4>
                    <p className="uk-comment-meta uk-margin-remove-top">{moment(datasource.date).fromNow()  }</p>
                </div>
            </div>
            
           {/* {isOwner && */}
            <div className="uk-position-top-right ">
                <button className="uk-link-muted" data-uk-icon="more" href="#"></button>
                <div uk-dropdown="boundary: .uk-comment;mode: click" >
                    <ul className="uk-nav uk-dropdown-nav">
                        <li><a href="#"><i data-uk-icon="lock"></i> Make Private</a></li>
                        <li><a href="#"><i data-uk-icon="unlock"></i> Make Public</a></li>
                        <li><a href="#"><i data-uk-icon="mask"></i> Request Identity</a></li>
                        <li><a href="#"><i data-uk-icon="social"></i> Share</a></li>
                    </ul>
                </div>
            </div> 
            {/* } */}

        </header>
        <div className="uk-comment-body">
            <p>{datasource.content}</p>
        </div>
    </article>


  )
}
