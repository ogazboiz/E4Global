
import { Route, Router } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <div>
      <Router>
      <Route path="/" element={<RootLayout />} >
       
        </Route>
      </Router>
     
    </div>
  )
}

export default App
