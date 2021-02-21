import "./App.css";
import "./assets/fonts/boon.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ProductLists from "./pages/ProductLists";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:id">
          <MainLayout component={ProductDetail} />
        </Route>
        <Route path="/cart">
          <MainLayout component={Cart} />
        </Route>
        <Route path="/">
          <MainLayout component={ProductLists} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
