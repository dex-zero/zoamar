import { AdmPage } from './components/admPage'
import Header  from './components/header'
import { HomePage } from './components/homePage'
import { LoginPage } from './components/loginPage'
import { SignInPage } from './components/signinPage'

function App() {

  return (
    <div className='mx-auto py-0 flex flex-col items-center gap-5'>
      <Header/>
      <LoginPage/>
    </div>
  )
}

export default App
