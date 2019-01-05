import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { NavLink } from 'react-router-dom';
import logo from '../../media/svg/paper-plane.svg';
import routes from '../../config/routes';
import './PageHeader.css';
import { connect } from 'react-redux';

class PageHeader extends Component {


    render() {

        return (
            <div className="app-header" >
                <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 250">
                    <div className="uk-container">
                    <nav className="uk-navbar uk-navbar-container ">
                        <div className="uk-navbar-left">
                            <div className="brand">
                                <NavLink to={routes.home} ><h1 title="honestgram" data-uk-slideshow-parallax="y: -60,60">honestgram<img src={logo} alt="honestgram logo" /></h1></NavLink>
                            </div>
                        </div>
                        <div className="uk-navbar-right">
                            <Nav isAuth={this.props.session.isAuthenticated} account={this.props.session.account} global={this.props.global} />
                        </div>
                    </nav>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        session: state.session,
        global: state.global
    }
}

export default connect(mapStateToProps)(PageHeader);