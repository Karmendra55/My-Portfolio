import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"
import Journey from "./pages/Journey"
import CertificationsPage from "./pages/CertificationsPage"
import Building from "./pages/Building"

import ScrollToTop from "./components/ui/ScrollToTop"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/projects/:slug"
            element={<ProjectDetails />}
          />

          <Route 
            path="/journey" 
            element={<Journey />} 
          />
          <Route
            path="/certifications"
            element={<CertificationsPage />}
          />

          <Route
            path="/building"
            element={<Building />}
          />
          
        </Routes>
    </BrowserRouter>
  )
}

export default App