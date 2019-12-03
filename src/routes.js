import App from 'components/App/App'
import Users from 'components/Users'

export default [
  { path: '/', exact: true, component: App },
  { path: '/users', component: Users }
]
