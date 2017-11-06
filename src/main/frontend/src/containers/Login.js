import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import userActions from '../actions/user.action'

let Login = props => {
    const { from } = props.location.state || { from: { pathname: '/lobby' } };
    const loginSubmit = values => {
        props.login(values, from);
    };
    return <div className='row'>
        <div className='offset-by-one five columns'>
            <section>
                <h5>Want to play without registration?</h5>
                    <button className='button-primary u-full-width' type='submit'>Play as guest</button>
            </section>
        </div>
        <div className='five columns'>
            <section>
                <div>{props.user.errors}</div>
                <h5>Allready have an accound?</h5>
                <form action='/login' onSubmit={props.handleSubmit(loginSubmit)} method='POST'>
                    <label htmlFor='username'>User name</label>
                    <Field id='username' name='username' component='input' type='text' className='u-full-width'/>
                    <label htmlFor='password'>Password</label>
                    <Field id='password' name='password' component='input' type='password' className='u-full-width'/>
                    <button className='button-primary u-full-width' type='submit'>Log in</button>
                </form>
            </section>
        </div>
    </div>
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(userActions.login, dispatch),
        // playAsGuest: bindActionCreators(userActions.playAsGuest, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'login'})(Login))