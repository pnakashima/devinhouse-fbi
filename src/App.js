import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import NewSuspect from "./pages/NewSuspect";
import SuspectDetails from "./pages/SuspectDetails";


const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suspect-details" element={<SuspectDetails />} />
        <Route path="/new-suspect" element={<NewSuspect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App