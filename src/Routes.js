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
import OrderPage from "./Pages/OrderPage/OrderPage";
import CatalogPage from "./Pages/CatalogPage";
import Footer from "./components/Footer/Footer";
import AdminPage from "./Pages/AdminPage";
import AdminContextProvider from "./contexts/AdminContex";
import AuthContextProvider from "./contexts/AuthContext";
import NewsPage from "./Pages/NewsPage/NewsPage";
import CartPage from "./Pages/CartPage";

const Routes = () => {
  return (
    <AuthContextProvider>
      <AdminContextProvider>
        <MainContextProvider>
          <BrowserRouter>
            <NavbarComp />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/admin" component={AdminPage} />
              <Route exact path="/create" component={CreateCard} />
              <Route exact path="/edit/:id" component={EditPage} />

              <Route exact path="/sign-in" component={SignInPage} />
              <Route exact path="/sign-up" component={SignUpPage} />
              <Route exact path="/order" component={OrderPage} />
              <Route exact path="/news" component={NewsPage} />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/created" component={CatalogPage} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </MainContextProvider>
      </AdminContextProvider>
    </AuthContextProvider>
  );
};

export default Routes;
