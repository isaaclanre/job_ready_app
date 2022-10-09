import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './component/Indexpage/Home'
import Loginform from './component/Signin/Loginform.js'
 import Form from './component/Signup/Form'
 import HireMe from './HireMe'
 import AdminPage from './AdminPage'
 import Questions from './stacks/react/Questions'
 import Resources from './stacks/react/Resources'
 import NodeQuestions from './stacks/node/NodeQuestions'
 import NodeResources from './stacks/node/NodeResources'
 import JavaResources from './stacks/java/JavaResources'
 import JavaQuestions from './stacks/java/JavaQuestions'
 import CsharpResources from './stacks/csharp/CsharpResources'
 import CsharpQuestions from './stacks/csharp/CsharpQuestions'
function App() {
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Loginform/>}/>
        <Route exact path="/registration" element={<Form/>}/>
        <Route exact path="/hireme" element={<HireMe/>}/>
        <Route exact path="/admin/:id" element={<AdminPage/>}/>
        <Route exact path="/react" element={<Questions/>}/>
        <Route exact path="/reactresources" element={<Resources/>}/>
        <Route exact path="/noderesources" element={<NodeResources/>}/>
        <Route exact path="/nodequestions" element={<NodeQuestions/>}/>
        <Route exact path="/javaQuestions" element={<JavaQuestions/>}/>
        <Route exact path="/javaResources" element={<JavaResources/>}/>
        <Route exact path="/csharpQuestions" element={<CsharpQuestions/>}/>
        <Route exact path="/csharpResources" element={<CsharpResources/>}/>
      </Routes>
    </Router>
  )
  
}

export default App
