import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import RootLayout from './Layout/RootLayout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
