import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import routes from '../../../config/routes';

import { newWallPost } from '../wallActions';
import './WallPostForm.css';

class WallPostForm extends Component {
    renderField(field) {
        return (
            <textarea {...field.input} className={(field.meta.touched && field.meta.error) ? `${field.className} uk-form-danger` : field.className} placeholder={field.label} type={field.type} ></textarea>
        );
    }
    onSubmit(values) {
        // prep data
        let data = {
            ...values,
            wall: this.props.wid,
            author: this.props.session.account.uid,
            owner: this.props.wall.info.uid,
            date: Date.now(),
            isPublic: true,
            isAnonymous: true,
        }
        this.props.newWallPost(data, () => {
            this.props.onSubmitCallback();
            this.props.reset();
            this.fly();
        });
    }

    fly() {
        setTimeout(function () {
            document.querySelector('#plate').classList.remove('front');
            document.querySelector('#container').classList.remove('beginning');
            _.map(document.querySelectorAll('.curvable'), (item, index) => {
                item.classList.add('curved');
            });
            setTimeout(function () {
                document.querySelector('#container').classList.add('hover');
                setTimeout(function () {
                    document.querySelector('#container').classList.add('fly_away_first');
                    setTimeout(function () {
                        document.querySelector('#container').classList.add('fly_away');
                        setTimeout(function () {
                            document.querySelector('#plate').classList.add('front');
                            setTimeout(function () {
                                document.querySelector('#container').classList.remove('fly_away', 'fly_away_first', 'hover');
                                document.querySelector('#container').classList.add('beginning');
                                //document.querySelector('.curvable').classList.remove('curved');
                                _.map(document.querySelectorAll('.curvable'), (item, index) => {
                                    item.classList.remove('curved');
                                });
                            }, 500);
                        }, 500);
                    }, 600);
                }, 1000)
            }, 1800);
        }, 200);
    }
    render() {

        const { handleSubmit, pristine, reset, submitting } = this.props;
        if (this.props.wall.info) {
            return (


                <div className="content-form-post uk-flex-center uk-grid-collapse" data-uk-grid>
                    <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l">
                        <div className="form-wrapper uk-margin-top">
                            {
                                (this.props.session.isAuthenticated) ?
                                    (
                                        <div className="paperplane-input">
                                            <div id="plate" className="front">
                                                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                                    <Field className="uk-textarea" name="content" type="textarea" label={`say something to ${this.props.wall.info.displayName}`} component={this.renderField} />
                                                    <button className="uk-button button-accent" type="submit" disabled={!this.props.valid} >Post</button>
                                                </form>
                                            </div>
                                            <div className="paperplane-wrapper">
                                                <div id="container" className="beginning">
                                                    <div id="left-wing">
                                                        <div className="top_left curvable"> </div>
                                                        <div className="bottom_left curvable"> </div>
                                                        <div className="wing wing1"></div>
                                                        <div className="wing wing2"></div>
                                                    </div>

                                                    <div id="right-wing">
                                                        <div className="top_right curvable"> </div>
                                                        <div className="bottom_right curvable"> </div>
                                                        <div className="wing wing3"></div>
                                                        <div className="wing wing4"></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="uk-felx uk-flex-center" data-uk-grid>
                                            <div className="uk-text-center">
                                                <Link className="uk-button  button-dark" to={routes.signin} >Sign in to say something <span data-uk-icon="icon: sign-in"></span></Link>
                                                <p className="uk-text-meta">your identity stays anonymous after you are signed in</p>
                                            </div>
                                        </div>

                                    )
                            }

                        
                        </div>
                    </div>
                </div>


            )
        }
        else {
            return (<div>loading..</div>)
        }


    }
}

function validate(values) {
    const errors = {}
    if (!values.content) {
        errors.content = 'Required'
    }
    return errors
}

function mapStateToProps(state) {
    return {
        session: state.session,
        wall: state.wall
    }
}
export default reduxForm({
    form: 'newWallPost',
    validate
})(connect(mapStateToProps, { newWallPost })(WallPostForm));