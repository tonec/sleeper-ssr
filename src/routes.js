import HomeLoadable from 'containers/Home/HomeLoadable'
import UsersLoadable from 'containers/Users/UsersLoadable'
import App from './App'

export default [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: HomeLoadable },
      { path: '/users', component: UsersLoadable }
    ]
  }
]
