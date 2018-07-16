/*
 * @Author: xuchao 
 * @Date: 2018-07-11 14:00:21 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-16 16:08:42
 */
import * as React from 'react';
import Loadable from 'react-loadable';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Loading from '@components/Loading';

const App = Loadable({
  loader: () => import('@views/App'),
  loading: Loading
})

const Routes = () => {
  <Router>
      <Switch>
          <Route exact path="/" component={App} />
      </Switch>
  </Router>
}

export default Routes;