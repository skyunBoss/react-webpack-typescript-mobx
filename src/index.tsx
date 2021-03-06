/*
 * @Author: xuchao 
 * @Date: 2018-07-11 13:48:39 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-26 16:08:41
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';

import Routes from '@routes/';
import * as stores from '@stores/';

import '@assets/css/common.less';

const render = Component => {
    ReactDOM.render(
        <Provider {...stores}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('app') as HTMLElement
    )
}

render(Routes);