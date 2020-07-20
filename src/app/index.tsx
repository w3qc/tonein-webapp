import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from '../components/root'

const App: React.FC = () => (
  <div>
    <Router>
      <Root />
    </Router>
  </div>
)

export default App
