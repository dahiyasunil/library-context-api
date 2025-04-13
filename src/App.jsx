import { BrowserRouter as Router, Routes,Route } from "react-router"
import Nav from "./components/Nav"

function App() {

  return (
    <div>
      <Router>
        <Nav />
      </Router>
    </div>
  )
}

export default App
