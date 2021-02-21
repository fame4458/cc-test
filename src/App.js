import "./App.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import ProductLists from "./pages/ProductLists";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Product Lists</Link>
            </li>
            <li>
              <Link to="/product/1">Test</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        <Switch>
         
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <ProductLists />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
