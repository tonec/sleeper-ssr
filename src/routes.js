import HomeLoadable from 'components/Home/HomeLoadable'
import UsersLoadable from 'components/Users/UsersLoadable'
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
