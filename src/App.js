import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/footer/Footer";
import Catalog from "./components/pages/Catalog";
import Calculator from "./components/pages/Calculator";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";
import PlantPage from "./components/pages/PlantPage";
import ScrollToTop from "./components/other/ScrollToTop";
const App = () => {
  const [page, setPage] = useState(0);
  return (
    <Router>
      <ScrollToTop />
      <Navbar setPage={setPage} />

      <Switch>
        <Route path="/" exact component={() => <Home page={page} />} />

        <Route
          path="/katalog"
          exact
          component={() => <Catalog page={page} setPage={setPage} />}
        />

        <Route
          path="/katalog/:id"
          component={() => <PlantPage page={page} />}
        />

        <Route
          path="/kalkulator"
          component={() => <Calculator page={page} />}
        />

        <Route
          path="/sklep"
          component={() => <Shop page={page} setPage={setPage} />}
        />

        <Route path="/kontakt" component={() => <Contact page={page} />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
