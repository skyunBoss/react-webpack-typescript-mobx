/*
 * @Author: xuchao 
 * @Date: 2018-07-11 14:00:21 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-18 10:13:58
 */
import * as React from 'react'
import Loadable from 'react-loadable'
import { Switch, Route, Redirect, BrowserRouter, HashRouter as Router } from 'react-router-dom'

import Loading from '@components/Loading'

const Home = Loadable({
    loader: () => import('@views/App'),
    loading: Loading
})
const Login = Loadable({
    loader: () => import('@views/Login'),
    loading: Loading
})

// 权限控制
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            true ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
)

const Routes = () => (
    <Router>
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </Router>
)

export default Routes
