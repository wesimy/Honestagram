import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import {Link} from 'react-router-dom';
import routes from '../../../config/routes';
import AntdFormField from '../../../hoc/AntdFormField/AntdFormField';
import { newWallPost } from '../wallActions';
import './WallPostForm.css';

const ATextArea = AntdFormField(Input.TextArea);
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
            wall: this.props.wall.info.uid,
            author: this.props.session.account.uid,
            date: Date.now(),
            isPublic: true,
            isAnonymous: true,
        }
        this.props.newWallPost(data, () => {
            this.props.onSubmitCallback();
            this.props.reset();
        });
    }

    render() {
        
        const { handleSubmit, pristine, reset, submitting } = this.props;
        if (this.props.wall.info) {
            return (
                
        
                        <div className="content-form-post uk-flex-center uk-grid-collapse" data-uk-grid>
                            <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l">
                                <div className="form-wrapper">
                                {
                                    (this.props.session.isAuthenticated)?
                                    (
                                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                        <div className="uk-margin">
                                            <Field className="uk-textarea" name="content" type="textarea" label={`say something to ${this.props.wall.info.displayName}`} component={this.renderField} />
                                        </div>
                                        <button className="uk-button uk-button uk-button-third" type="submit" disabled={!this.props.valid} >Post</button>
                                    </form>
                                    ):(
                                        <form>
                                        <div className="uk-margin">
                                            <textarea className="uk-textarea"></textarea>
                                        </div>
                                        
                                        <div className="uk-overlay-default uk-position-cover">
                <div className="uk-position-center">
                    <Link className="uk-button uk-button uk-button-third" to={routes.signin} >Sign in to post <span data-uk-icon="icon: sign-in"></span></Link>
                </div>
            </div>
                                    </form>
                                    
                                    )
                                }
                                   
                                    <div className="background-wrapper"></div>
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