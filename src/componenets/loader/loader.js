import React from 'react'
// import loader from '../../media/gif/loader.gif';
import './loader.css';
export default (props) => {
    return (

        <div className="loader uk-overlay-default uk-position-coveruk-animation-fade " >
            <div className="uk-position-center">
            <span data-uk-spinner="ratio: 1"></span>


            </div>
        </div>

    )
}
