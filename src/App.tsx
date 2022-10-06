import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import dinteroLogo from "./assets/dintero_logo_black.svg";

import "./App.css";

import { Main, SelectedCard } from "./pages";

function App() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState({});

  return (
    <div className="App">
      <div className="header">
        <img
          src={dinteroLogo}
          className="logo"
          alt="Dinteros logo"
          width="210"
        />
      </div>
      <Router>

      
      <Routes>
        <Route
          path="/"
          element={
            <Main
              companies={companies}
              setCompanies={setCompanies}
              setSelectedCompany={setSelectedCompany}
            ></Main>
          }
        ></Route>
        <Route
          path="/company"
          element={
            <SelectedCard selectedCompany={selectedCompany}></SelectedCard>
          }
        ></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
