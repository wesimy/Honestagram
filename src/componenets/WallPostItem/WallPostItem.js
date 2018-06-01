import React from 'react'
import {Link} from 'react-router-dom';
import moment from 'moment';

export default ({datasource}) => {
  return (
    <article className="uk-comment uk-visible-toggle uk-comment-primary">
    <header className="uk-comment-header uk-position-relative">
        <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
            <div className="uk-width-auto">
                <img className="uk-comment-avatar" src="https://getuikit.com/docs/images/avatar.jpg" width="80" height="80" alt="" />
            </div>
            <div className="uk-width-expand">
                <h4 className="uk-comment-title uk-margin-remove"><Link to={`/post/${datasource.id}`}>link</Link></h4>
                
                <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">{moment(datasource.date).fromNow()  }</a></p>
            </div>
        </div>
        
    </header>
    <div className="uk-comment-body">
        <p>{datasource.content}</p>
    </div>
</article>
  )
}
