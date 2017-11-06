import React, {Component} from 'react'
import {connect} from 'react-redux'

export default WrappedComponent => {
    class Auth extends Component {
        componentWillMount() {
            if (!this.props.authenticated) {
                console.log(this.props);
                this.props.history.push('/', {from: this.props.location});
            }
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            authenticated: state.user.isAuthenticated
        };
    }

    return connect(mapStateToProps)(Auth);
}