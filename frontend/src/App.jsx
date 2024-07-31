
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from './component/SignIn'
import SignUp from './component/Signup'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
