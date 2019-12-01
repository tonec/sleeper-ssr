import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import { createMemoryHistory } from 'history'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import { trigger } from 'redial'
import Html from 'helpers/Html'
import createStore from 'redux/store'
import routes from './routes'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const history = qhistory(createMemoryHistory({ initialEntries: [req.originalUrl] }), stringify, parse)
  const store = createStore(history)
  const branch = matchRoutes(routes, req.path)
  const components = branch.map(b => b.route.component)
  const locals = { store }

  console.log('req', req.url)

  trigger('fetch', components, locals).then(() => {
    res.send(Html(req, store))
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
