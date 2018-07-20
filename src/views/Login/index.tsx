/*
 * @Author: xuchao 
 * @Date: 2018-07-11 14:00:14 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-17 14:52:15
 */
import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                Login
            </div>
        )
    }
}