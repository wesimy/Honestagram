import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';
    import {  Menu } from 'antd';

export default () => {
    return (

        <ul className="uk-iconnav">
                <li><Link data-uk-icon="icon: user" to={routes.dashboard}></Link> </li>
                <li><Link data-uk-icon="icon: comment" to={routes.wall} ></Link></li>
                <li><Link data-uk-icon="icon: bell" to={routes.posts} ></Link></li>
                <li><Link data-uk-icon="icon: settings" to={routes.settings} ></Link></li>
                <li><Link data-uk-icon="icon: sign-in" to={routes.signin} ></Link></li>
                <li><Link data-uk-icon="icon: sign-out" to={routes.signout} ></Link></li>
        </ul>

        
            
      
  )
}
