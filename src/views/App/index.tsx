/*
 * @Author: xuchao 
 * @Date: 2018-07-11 14:00:14 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-25 11:31:05
 */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Report from '@stores/report';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

interface Props{
    report?: Report
}

@inject('Report')
@observer
export default class App extends React.Component<Props, {}> {
    public render(): JSX.Element {
        return (
            <Layout>
                <Header>
                    <div className="logo" />
                    <ul>
                        <li>Nav 1</li>
                    </ul>
                </Header>
                <Content>
                    <Link to="/login"></Link>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}