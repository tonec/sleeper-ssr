import App from 'components/App/App'
import { Users } from 'components'

export default [
  { path: '/', exact: true, component: App },
  { path: '/users', component: Users }
]
