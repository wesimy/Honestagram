import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import routes from '../../config/routes';
export default ({ id,datasource }) => {
    return (

        <article className="uk-card-default uk-comment uk-visible-toggle uk-padding">
            <header className="uk-comment-header uk-position-relative">
                <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                    <div className="uk-width-auto">
                        <img className="uk-comment-avatar" src={datasource.photoURL} width="70" height="70" alt="" />
                    </div>
                    <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove">{datasource.displayName}</h4>
                        <a href={`${routes.wall}/${id}`}>Goto wall</a>
                        {/* <p className="uk-comment-meta uk-margin-remove-top">{moment(datasource.date).fromNow()  }</p> */}
                    </div>
                </div>

            </header>
        </article>


    )
}
