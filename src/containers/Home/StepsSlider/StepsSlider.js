
import React from 'react'

import './StepsSlider.css';
import speach from '../../../media/svg/paper-speach.svg';
import p01 from '../../../media/svg/P01.svg';
import p02 from '../../../media/svg/P02.svg';
import p03 from '../../../media/svg/P03.svg';
import p04 from '../../../media/svg/P04.svg';
import p05 from '../../../media/svg/P05.svg';
import p06 from '../../../media/svg/P06.svg';

import origramiFacebook from '../../../media/png/F.png';
import origramiInstagram from '../../../media/png/Insta.png';
import origramiYoutube from '../../../media/png/Y.png';
import origramiPinterest from '../../../media/png/P.png';
import origramiLinkedIn from '../../../media/png/In.png';
import origramiTumb from '../../../media/png/Tumb.png';
import origramiGoogle from '../../../media/png/G.png';
import origramiTwitter from '../../../media/png/Twitter.png';


export default () => {
 
      
    return (
        <div className="swiper-container swiper-container-h">
            <div className="swiper-wrapper">
                <div className="swiper-slide step-01">
                    <div className="uk-width-large">
                        <div className="step-images">
                            <img className="img-speach" src={speach} alt="honestgram" />
                        </div>
                        <div className="step-content uk-margin">
                            <h2>Create an honestgram wall</h2>

                        </div>
                    </div>

                </div>

                <div className="swiper-slide step-02">
                    <div className="uk-width-large">
                        <div className="step-images">
                            <img className="img-speach" src={speach} alt="honestgram" />
                            <div className="img-social">
                                <img src={origramiTwitter} alt="Share to Twitter" />
                                <img src={origramiFacebook} alt="Share to Facebook" />
                                <img src={origramiGoogle} alt="Share to Google" />
                                <img src={origramiLinkedIn} alt="Share to LinkedIn" />
                                <img src={origramiPinterest} alt="Share to Pinterest" />
                                <img src={origramiYoutube} alt="Share to Youtube" />
                                <img src={origramiTumb} alt="Share to Tumblr" />
                                <img src={origramiInstagram} alt="Share to Instagram" />

                            </div>
                        </div>
                        <div className="step-content uk-margin">
                            <h2>Share your wall out loud</h2>

                        </div>
                    </div>
                </div>

                <div className="swiper-slide step-03">
                    <div className="uk-width-large">
                        <div className="step-images">
                            <img className="img-speach" src={speach} alt="honestgram" />
                            <div className="img-planes">
                                <img src={p01} alt="honestgram message" />
                                <img src={p02} alt="honestgram message" />
                                <img src={p03} alt="honestgram message" />
                                <img src={p04} alt="honestgram message" />
                                <img src={p05} alt="honestgram message" />
                                <img src={p06} alt="honestgram message" />
                            </div>

                        </div>
                        <div className="step-content uk-margin">
                            <h2>Find out what people say</h2>

                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination swiper-pagination swiper-pagination-h"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    )
}
