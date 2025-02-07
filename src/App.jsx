import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FullStackCoursePage from './pages/FullStackCoursePage'
import UiUxCoursePage from './pages/UiUxCoursePage'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/full-stack-course" element={<FullStackCoursePage />} />
        <Route exact path="/ui-ux-course" element={<UiUxCoursePage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
