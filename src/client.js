import 'babel-polyfill'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { trigger } from 'redial'
import createStore from 'redux/store'
import routes from './routes'

const history = qhistory(createBrowserHistory(), stringify, parse)
const store = createStore(history)

history.listen(location => {
  const branch = matchRoutes(routes, location.pathname)
  const components = branch.map(b => b.route.component)
  const locals = { store }

  if (window.INITIAL_STATE) {
    delete window.INITIAL_STATE
  } else {
    trigger('fetch', components, locals)
  }

  trigger('defer', components, locals)
})

ReactDOM.hydrate(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('content')
)
