import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Contacts from './components/Contacts/Contacts'

function App() {

  return (
    <>
      <div className='container'>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignUp} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/contacts' component={Contacts} exact />
        </Switch>
      </div>
    </>
  )
}
export default App