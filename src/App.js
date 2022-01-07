

import React from "react"
import "./App.css"
import {HomePage} from "./containers/HomePage/index.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {CustomerAccessPage} from "./containers/customerAccessPage/index.js"

function App() {
  return (
    <div>
    <Router>  
        <Routes> 
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/access-page/:action" element={<CustomerAccessPage/>}/>
        </Routes>
    </Router>
    </div>
  )
}

export default App
