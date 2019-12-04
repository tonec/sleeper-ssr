import App from 'components/App/App'
import UsersLoadable from 'components/Users/UsersLoadable'

export default [
  { path: '/', exact: true, component: App },
  { path: '/users', component: UsersLoadable }
]
