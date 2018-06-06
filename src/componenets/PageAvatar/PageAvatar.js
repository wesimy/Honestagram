import React, { Component } from 'react';
import './PageAvatar.css';
import { Card, Button } from 'antd';
import placeholder from '../../media/png/avatar.png';
const PageAvatar = ({ datasource }) => {

    return (

        <div className="content-profile uk-flex-center uk-grid-collapse" data-uk-grid>
            <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l">
                {datasource ? (
                    <div className="uk-card uk-text-center">
                        <div className="uk-card-media-top uk-width-1-3 uk-width-1-4@s uk-width-1-3@l">
                            <div data-uk-lightbox>
                                <a href={datasource.photoURL}>
                                    <img className="uk-border-circle" src={datasource.photoURL} alt="" />
                                </a>
                            </div>

                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">{datasource.displayName}</h3>
                            <p>{datasource.wallDescription}</p>
                        </div>
                    </div>
                ) : (
                        <div className="uk-card uk-text-center">
                            <div className="uk-card-media-top uk-width-1-3 uk-width-1-4@s uk-width-1-3@l">
                                <img className="uk-border-circle" src={placeholder} alt="" />
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title"></h3>
                                <p></p>
                            </div>
                        </div>
                    )}
            </div>
        </div>);
}

export default PageAvatar;