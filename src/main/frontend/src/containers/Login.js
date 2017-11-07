import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import userActions from '../actions/user.action'

class Login extends Component {
    render() {
        const {from} = this.props.location.state || {from: {pathname: '/lobby'}};
        const loginSubmit = values => {
            this.props.login(values, from);
        };

        let authError = '';
        if (this.props.user.errors !== '') {
            authError = <div className='ui negative message'>
                <i className='close icon'> </i>
                <div className='header'>{this.props.user.errors}</div>
            </div>
        }
        return <div className='ui middle aligned centered grid'>
            <div className='seven wide column'>
                <div className='ui raised segment'>
                    <h3 className='ui header'>Want to play without registration?</h3>
                    <button className='fluid ui button' type='submit'>Play as guest</button>
                </div>
            </div>
            <div className='seven wide column'>
                <div className='ui raised segment'>
                    {authError}
                    <h3 className='ui header'>Allready have an accound?</h3>
                    <form className='ui form' onSubmit={this.props.handleSubmit(loginSubmit)}>
                        <div className='field'>
                            <label htmlFor='username'>User name</label>
                            <Field id='username' name='username' component='input' type='text'/>
                        </div>
                        <div className='field'>
                            <label htmlFor='password'>Password</label>
                            <Field id='password' name='password' component='input' type='password'
                                   className='u-full-width'/>
                        </div>
                        <button className='fluid ui button' type='submit'>Log in</button>
                    </form>
                </div>
            </div>
        </div>
    }
}

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