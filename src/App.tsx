import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import LoggedIn from "./components/LoggedIn"
import ComponentStepper from "./components/Stepper"
import "./components/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/loggedIn" element={<LoggedIn />} />
        <Route path="/home/createAcc" element={<ComponentStepper />} />
      </Routes>
    </Router>
  )
}

export default App
