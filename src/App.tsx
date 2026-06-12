import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"

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
        </Routes>
    </BrowserRouter>
  )
}

export default App