import React from 'react'
import moment from 'moment';
import routes from '../../config/routes';
import SocialShare from '../SocialShare/SocialShare';
import './WallItem.css';

const WallItem =  ({ id, datasource }) => {
    
    return (

        <article className="uk-card-default uk-comment uk-box-shadow-small wall-item">
            <header className="uk-comment-header uk-position-relative">
                <div className="uk-grid-collapse uk-flex-middle" data-uk-grid>
                    
                        <a href={`${routes.wall}/${id}`}>
                        <div className="uk-cover-container ">
                            <img className="" src={datasource.photoURL} alt="" data-uk-cover />
                        </div>
                            </a>

      
                    <div className="uk-width-expand">
                        <div className="wrapper">
                        <p className="uk-text-meta">{moment(datasource.date).fromNow()}</p>
                        <h3 className="uk-comment-title uk-margin-remove"><a href={`${routes.wall}/${id}`}>{datasource.displayName}</a></h3>
                        
                        <SocialShare datasource={datasource} size={25} shareurl={`${routes.baseurl}${routes.wall}/${id}`}/>
                        </div>
                        
                    </div>
                </div>
                
                
            </header>
        </article>


    )
}

export default WallItem;