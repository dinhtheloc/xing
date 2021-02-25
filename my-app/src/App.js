import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Category from './views/Category/Category';
import Product from './views/Product/Product';

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
      </Switch>
    </Router>
  );
}

export default App;
