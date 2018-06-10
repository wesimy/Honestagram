import './Home.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import routes from '../../config/routes';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';

import spread from '../../componenets/Spread/Spread';
import SignInForm from '../Account/SignIn/SignInForm/SignInForm';
import StepsSlider from './StepsSlider/StepsSlider';

import logo from '../../media/svg/paper-plane.svg';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spreadColors: [
        '#8acde0',
        '#d9eeef',
        '#52a0b3',
        '#8acde0'
      ]
    }
  }

  componentDidMount() {
   
    let swiperV = new Swiper('.swiper-container-v', {
      direction: 'vertical',
      speed: 800,
      mousewheel: true,
      effect: 'fade',
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
      },
    });

    swiperV.on('slideChange', () => {
      spread(this.state.spreadColors[swiperV.activeIndex]);
    });

    let swiperH = new Swiper('.swiper-container-h', {
      //mousewheel: true,
      slidesPerView: 1,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination-h',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      },
    });

    spread(this.state.spreadColors[(swiperV.activeIndex)?swiperV.activeIndex:0]);
  }
  render() {

    if (this.props.session.isAuthenticated) {
      return (<Redirect to={routes.default} />)
    }

    return (
      <React.Fragment>


        <div className="swiper-container-v">
          <div className="swiper-wrapper">

            <div className="swiper-slide home-slide-0">

              <div className="uk-container">
                <div className="brand">
                  <h1 title="honestgram">honestgram<img src={logo} alt="honestgram logo" /></h1>
                </div>
                <SignInForm />
              </div>


            </div>




            <div className="swiper-slide home-slide-1">
                <div>
              <div className="uk-container">
                  <img className="img-plane" src={logo} alt="honestgram" />
                  <h3><b>honestgram</b> is a place for people to tell you something anonymousely. </h3>
                  <p>We made it really simple for people to come and tell you something anonymously, we never disclose the identity of a person unless they choose to.</p>
                </div>
              </div>
            </div>

            <div className="swiper-slide home-slide-2">
            <div className="uk-container">
            <StepsSlider/>
            </div>
            </div>


            <div className="swiper-slide home-slide-3">
            <div className="uk-container">
                
                  <h2>Lets get started</h2>
                
                <SignInForm />
              </div>

            </div>


          </div>

          <div className="swiper-pagination swiper-pagination-v"></div>
        </div>
        <div id="spread"></div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    session: state.session
  }
}
export default connect(mapStateToProps)(Home);