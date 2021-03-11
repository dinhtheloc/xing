import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Category from './views/Category/Category';
import Product from './views/Product/Product';
import Cart from './views/Cart/Cart';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/danh-muc/:slug">
          <Category></Category>
        </Route>

        <Route path="/san-pham/:slug">
          <Product></Product>
        </Route>

        <Route path="/gio-hang">
          <Cart></Cart>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
