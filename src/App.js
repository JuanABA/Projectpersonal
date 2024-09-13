import "./App.css";
import ResponsiveAppBar from "./Components/AppBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Clients from "./Components/Clients";
import Shopping from "./Components/Shopping";
import Sales from "./Components/Sales";
import Component from "./Components/Suppliers";
import CreateSupplier from "./Components/CreateSupplier";
import CreateClient from "./Components/CreateClient";

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar />
        <div className="..">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suppliers" element={<Component />} />
            <Route path="/createsuppliers" element={<CreateSupplier />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/createclient" element={<CreateClient />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
