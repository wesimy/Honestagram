import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';
import placeholder from '../../media/svg/user-placeholder.svg';

export default ({ isAuth, account }) => {
    
    return (

        <React.Fragment>
            {
                (!isAuth) ?
                    (
                        
                        <ul className="uk-iconnav ">
                            <li><Link data-uk-icon="icon: sign-in" to={routes.signin} uk-tooltip="title: Sign in; delay: 250;animation: uk-animation-slide-bottom-small"></Link></li>
                        </ul>
                    )
                    :
                    (
                        <ul className="uk-iconnav uk-flex uk-flex-middle">
                            <li><Link to={routes.dashboard} uk-tooltip={'title: Dashboard;delay: 250;animation: uk-animation-slide-bottom-small'}><div className="uk-border-circle"><img className="uk-border-circle" src={(account.photoURL)? account.photoURL: placeholder} alt={account.displayName} /></div></Link></li> 
                            <li><Link data-uk-icon="icon: bell" to={routes.notifications} uk-tooltip="title:Identity Requests; delay: 250;animation: uk-animation-slide-bottom-small" ></Link></li>
                            <li><Link data-uk-icon="icon: settings" to={routes.settings} uk-tooltip="title:Account Settings; delay: 250;animation: uk-animation-slide-bottom-small"></Link></li>
                            {/* <li><Link to={routes.settings} uk-tooltip={'title: Account Settings;delay: 250;animation: uk-animation-slide-bottom-small'}><div className="uk-border-circle"><img className="uk-border-circle" src={(account.photoURL)? account.photoURL: placeholder} alt={account.displayName} /></div></Link></li> */}
                            <li><Link data-uk-icon="icon: sign-out" to={routes.signout} uk-tooltip="title: Sign out; delay: 250;animation: uk-animation-slide-bottom-small"></Link></li>
                        </ul>
                    )
            }
        </React.Fragment>





    )
}
