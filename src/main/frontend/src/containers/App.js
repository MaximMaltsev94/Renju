import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import User from '../components/User'
import userActions from '../actions/user.action'

class App extends Component {
    render() {
        const { firstName, age} = this.props.user;
        const setAge = this.props.setAge;
        const logout = this.props.logout;
        return <div className='ui raised segment'>
            <User name={firstName} setAge={setAge} age={age}/>
            <p>Back to login page</p>
            <Link to='/'>
                <button className='ui button' onClick={logout}>Sign out</button>
            </Link>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAge: bindActionCreators(userActions.setAge, dispatch),
        logout: bindActionCreators(userActions.logout, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)