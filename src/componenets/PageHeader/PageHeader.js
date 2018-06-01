import React from 'react';
import Nav from '../Nav/Nav';
import { NavLink } from 'react-router-dom'
import logo from '../../media/svg/paper-plane.svg';
import routes from '../../config/routes';
import './PageHeader.css';

export default () => {
  return (

    <div className="app-header uk-position-top" >

    <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-sticky="sel-target: .page-content; cls-active: uk-navbar-sticky; top: 200;animation: uk-animation-slide-top;">
        <div className="uk-navbar-left">
            <div className="brand">
                <NavLink to={routes.home} ><h1 title="honestgram" data-uk-slideshow-parallax="y: -60,60">honestgram<img src={logo} alt="honestgram logo" /></h1></NavLink>
            </div>
        </div>
        <div className="uk-navbar-right">
        <Nav/>
        </div>
    </nav>
 
</div>






  )
}
