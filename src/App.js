import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from './components/About/AboutUs';
import Contact from './components/contuct/Contact';
import Foods from './components/Foods Showcase/Foods';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Testimonial from './components/Testimonial/Testimonial';
import AuthProvider from './contexts/AuthProvider';
import DeliveryProvider from './contexts/DeliveryProvider';
import OrderProvider from './contexts/OrderProvider';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ErrorScreen from './screens/ErrorScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import HomeScreen from './screens/HomeScreen';
import OrderSuccessfulScreen from './screens/OrderSuccessfulScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <DeliveryProvider>
          <Navbar />
          <Switch>
            <Route exact path="/"><HomeScreen /></Route>      
            <PublicRoute exact path="/home"><HomeScreen /></PublicRoute>
            <PublicRoute exact path="/about"><AboutUs /></PublicRoute>
            <PublicRoute exact path="/service"><Foods /></PublicRoute>
            <PublicRoute exact path="/testimonial"><Testimonial /></PublicRoute>
            <PublicRoute exact path="/contact"><Contact /></PublicRoute>
            <PublicRoute exact path="/signup"><SignUpScreen /></PublicRoute>
            <PublicRoute exact path="/signin"><SignInScreen /></PublicRoute>
            <PrivateRoute exact path="/foods/:title"><FoodDetailScreen /></PrivateRoute>
            <PrivateRoute exact path="/orders"><PlaceOrderScreen /></PrivateRoute>
            <PrivateRoute exact path="/order-successful"><OrderSuccessfulScreen /></PrivateRoute>
            <Route  path="*"><ErrorScreen /></Route>
          </Switch>
          <Footer></Footer>
          </DeliveryProvider>
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
