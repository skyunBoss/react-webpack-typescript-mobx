/*
 * @Author: xuchao 
 * @Date: 2018-07-11 13:48:39 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-17 15:31:13
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'

import Routes from './routes'
import * as store from './stores'

const render = Component => {
    ReactDOM.render(
        <Provider {...store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('app') as HTMLElement
    )
}

render(Routes)
