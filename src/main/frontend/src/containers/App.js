import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import User from '../components/User'
import * as userActions from '../actions/user.action'

class App extends Component {
    render() {
        const { firstName, age} = this.props.user;
        const {setAge} = this.props.userActions;
        return <User name={firstName} setAge={setAge} age={age}/>
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)