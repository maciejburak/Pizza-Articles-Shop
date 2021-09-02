import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/Homepage/HomePage';
import Ovens from './components/views/Ovens/OvensContainer.js';
import Flours from './components/views/Flours/FloursContainer.js';
import Acessories from './components/views/Acessories/AcessoriesContainer';
import Recipe from './components/views/Recipe/Recipe';
import Contact from './components/layout/Contact/Contact';
import AboutUs from './components/layout/AboutUs/AboutUs';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/flours" component={Flours} />
            <Route exact path="/ovens" component={Ovens} />
            <Route exact path="/acessories" component={Acessories} />
            <Route exact path="/recipe" component={Recipe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={AboutUs} />
            {/*<Route exact path='/post/:id' component={Post} />
          <Route exact path='/post/:id/edit' component={PostEdit} />
          <Route path='*' component={NotFound} />*/}
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
