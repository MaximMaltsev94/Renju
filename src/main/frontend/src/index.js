import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, Switch, } from 'react-router-dom'
import configureStore from './store/configureStore'
import './styles/main.less'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min'
import App from './containers/App'
import Login from './containers/Login'
import RequireAuth from './containers/RequireAuth';
import History from './util/createHistory'

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={History}>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/lobby' component={RequireAuth(App)}/>
                <Route path='*' render={() => (<div>404</div>)}/>
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));