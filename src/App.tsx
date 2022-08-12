import { useState } from 'react'
import dinteroLogo from './assets/dintero_logo_black.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="header">
          <img src={dinteroLogo} className="logo" alt="Dinteros logo" width="210"/>
      </div>
      <div className="content">
        Dintero frontend task
      </div>
     </div>
  )
}

export default App
