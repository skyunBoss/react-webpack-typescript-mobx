/*
 * @Author: xuchao 
 * @Date: 2018-07-11 14:00:21 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-12 16:47:46
 */
import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from '../App';

export class Routes extends React.Component{
  render(){
    return(
      <Switch>
        <Route path="/" exact component={App}/>
      </Switch>
    )
  }
}
