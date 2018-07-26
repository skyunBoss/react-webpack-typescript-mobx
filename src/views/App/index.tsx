/*
 * @Author: xuchao 
 * @Date: 2018-07-11 14:00:14 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-26 16:08:22
 */
import * as React from 'react';
// import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Report from '@stores/report';
import { Layout, Menu } from 'antd';

const MenuItem = Menu.Item;

interface Props {
    report?: Report
}

@inject('Report')
@observer
export default class App extends React.Component<Props, {}> {
    public render(){
        return (
            <Layout className="layout">
                <Layout.Header>
                    <div className="logo" />
                    <Menu>
                        <MenuItem>nav 1</MenuItem>
                    </Menu>
                </Layout.Header>
            </Layout>
        )
    }
}