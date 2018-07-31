import React from 'react';
import './ProfileCard.css';
import routes from '../../config/routes';
import SocialShare from '../SocialShare/SocialShare';
import _ from 'lodash';



export default ({ datasource = {} }) => {
    
    const profCard = _.map(datasource.walls,
        (item, id) => {
            
            const wall = { id: id, ...item};
            console.log('----------------------');
            console.log(item);
            console.log('----------------------');
            return(
               (wall.isProfile)? 
               
               

               <div className="profile-card uk-flex-center uk-grid-collapse" data-uk-grid key={id}>
               <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l">
             
                       <div className="uk-card uk-text-center">
                          
                           <div className="uk-card-media-top">
                           <a href={`${routes.wall}/${id}`}>
                                   <img src={wall.photoURL} alt="" className="uk-border-circle" />
                           </a>
                       </div>
                       
                       
                           
                           <div className="uk-card-body">
                           <h3 className="uk-comment-title uk-margin-remove"><a href={`${routes.wall}/${id}`}>{wall.displayName}</a></h3>
                           
                           <SocialShare datasource={wall} size={25} shareurl={`${routes.baseurl}${routes.wall}/${id}`}/>
                           </div>
                       </div>
                 
               </div>
           </div>



            :
            false
            );
        });

    return (
        <React.Fragment>
            {profCard}
        </React.Fragment>
    )
}



