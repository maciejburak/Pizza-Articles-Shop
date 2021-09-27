import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/Homepage/HomePage.js';
import Ovens from './components/views/Ovens/OvensContainer.js';
import Flours from './components/views/Flours/FloursContainer.js';
import Acessories from './components/views/Acessories/AcessoriesContainer';
import Recipe from './components/views/Recipe/Recipe';
import AboutUs from './components/layout/AboutUs/AboutUs';
import Product from './components/views/Product/ProductContainer';
import Order from './components/views/Order/OrderContainer';
import { fetchPublished } from './redux/dataRedux';
import { connect } from 'react-redux';
import { applyBasket } from './redux/orderRedux';

function App({uploadProducts, uploadBasket}) {
  useEffect(() => {
    uploadProducts();
    uploadBasket();
  },[]);
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/flours" component={Flours} />
          <Route exact path="/ovens" component={Ovens} />
          <Route exact path="/acessories" component={Acessories} />
          <Route exact path="/recipe" component={Recipe} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/order" component={Order} />
          {/*<Route path='*' component={NotFound} />*/}
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => ({
  uploadProducts: () => dispatch(fetchPublished()),
  uploadBasket: () => dispatch(applyBasket()),
});

App.propTypes = {
  uploadProducts: PropTypes.func,
  uploadBasket: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(App);


