import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { newWallPost } from '../wallActions';
import { connect } from 'react-redux';

class WallPostForm extends Component {

    renderField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <div>
                    <input {...field.input} className={(field.meta.touched && field.meta.error) ? `${field.className} uk-form-danger` : field.className} placeholder={field.label} type={field.type} />
                    {field.meta.touched &&
                        ((field.meta.error && <span>{field.meta.error}</span>) ||
                            (field.meta.warning && <span>{field.meta.warning}</span>))}
                </div>
            </div>
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
        });
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        if(this.props.session.isAuthenticated){
            return (
                <div>
                    <h1>New Post</h1>
                    
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <fieldset className="uk-fieldset">
    
    
    
                            <div className="uk-margin">
                                <Field className="uk-input" name="content" type="text" placeholder="Post Content" label="Post Content" component={this.renderField} />
                            </div>
    
    
                        </fieldset>
    
                        <button className="uk-button uk-button-primary" type="submit" disabled={submitting}>Post</button>
                    </form>
                </div>
            )
        }
        else{
            return(<p>sign in to post</p>)
        }
        
        
    }
}

function validate(values) {
    const errors = {}
    // if (!values.title) {
    //   errors.title = 'Required'
    // } else if (values.title.length < 4) {
    //   errors.title = 'Please enter a real title'
    // }

    // if (!values.category) {
    //   errors.category = 'Required'
    // }

    if (!values.content) {
        errors.content = 'Required'
    }
    // if (!values.email) {
    //   errors.email = 'Required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Invalid email address'
    // }
    // if (!values.age) {
    //   errors.age = 'Required'
    // } else if (isNaN(Number(values.age))) {
    //   errors.age = 'Must be a number'
    // } else if (Number(values.age) < 18) {
    //   errors.age = 'Sorry, you must be at least 18 years old'
    // }

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