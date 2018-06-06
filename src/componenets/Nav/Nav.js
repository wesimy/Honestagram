import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';


export default ({ isAuth, account }) => {
    
    return (

        <React.Fragment>
            {
                (!isAuth) ?
                    (
                        
                        <ul className="uk-iconnav ">
                            <li><Link data-uk-icon="icon: sign-in" to={routes.signin}></Link></li>
                        </ul>
                    )
                    :
                    (
                        <ul className="uk-iconnav uk-flex uk-flex-middle">
                            {/* <li><Link to={routes.dashboard}  uk-tooltip={'title: Dashboard;delay: 250;animation: uk-animation-slide-bottom-small'}><div className="uk-border-circle"><img className="uk-border-circle" src={account.photoURL} alt={account.displayName} /></div></Link></li> */}
                            <li><Link data-uk-icon="icon: comments" to={routes.dashboard}  uk-tooltip="title: Dashboard; delay: 250;animation: uk-animation-slide-bottom-small"></Link></li>
                            <li><Link data-uk-icon="icon: bell" to={routes.posts}  uk-tooltip="title:Reveal Requests; delay: 250;animation: uk-animation-slide-bottom-small" ></Link></li>
                            <li><Link data-uk-icon="icon: settings" to={routes.settings} uk-tooltip="title:Account Settings; delay: 250;animation: uk-animation-slide-bottom-small"></Link></li>
                            <li><Link data-uk-icon="icon: sign-out" to={routes.signout}  uk-tooltip="title: Sign out; delay: 250;animation: uk-animation-slide-bottom-small"></Link></li>
                        </ul>
                    )
            }
        </React.Fragment>





    )
}
