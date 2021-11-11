import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import CreateCard from "./components/CreateCard/CreateCard";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import NavbarComp from "./components/Navbar/NavbarComp";
import MainContextProvider from "./contexts/MainContext";
import EditPage from "./Pages/EditPage/EditPage";
import CatalogPage from "./Pages/CatalogPage";

const Routes = () => {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <NavbarComp />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={CreateCard} />
          <Route exact path="/edit/:id" component={EditPage} />

          <Route exact path="/sign-in" component={SignInPage} />
          <Route exact path="/sign-up" component={SignUpPage} />
          <Route exact path="/created" component={CatalogPage} />
        </Switch>
      </BrowserRouter>
    </MainContextProvider>
  );
};

export default Routes;
