/*
 * @Author: xuchao 
 * @Date: 2018-07-11 14:00:14 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-20 17:07:49
 */
import * as React from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import * as store from '@stores'

interface ReportProps extends RouteComponentProps<{}>{
    store: store.report
} 

@inject('store')
@observer
export default class App extends React.Component<ReportProps, {}> {
    render() {
        console.log(this.props.store)
        return (
            <div>
                <Link to="/login">Login</Link>
                App
            </div>
        )
    }
}