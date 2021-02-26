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
      <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
        {/* begin::Container */}
        <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* begin::Copyright */}
          <div class="text-dark order-2 order-md-1">
            <span class="text-muted fw-bold me-2">2021©</span>
            <a href="https://keenthemes.com" target="_blank" class="text-gray-800 text-hover-primary">Keenthemes</a>
          </div>
          {/* end::Copyright */}
          {/* begin::Nav */}
          <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
            <li class="menu-item">
              <a href="/start/general/faq.html" target="_blank" class="menu-link ps-0 pe-2">About</a>
            </li>
            <li class="menu-item">
              <a href="/start/general/faq.html" target="_blank" class="menu-link pe-0 pe-2">Contact</a>
            </li>
            <li class="menu-item">
              <a href="/start/general/faq.html" target="_blank" class="menu-link pe-0">Purchase</a>
            </li>
          </ul>
          {/* end::Nav */}
        </div>
        {/* end::Container */}
      </div>
    </Router>
  );
}

export default App;
