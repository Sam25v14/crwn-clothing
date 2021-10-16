import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import { connect } from 'react-redux';

import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

<<<<<<< HEAD
import { selectCurrentUser } from "./redux/user/user.selectors";
=======
>>>>>>> 8dac5c63d920a1a93d372cbbb2ab3929f02fa9c0
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { setCurrentUser } from './redux/user/user.actions';
import { Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { createStructuredSelector } from "reselect";
import CheckoutPage from './pages/checkout/checkout.component';
=======
>>>>>>> 8dac5c63d920a1a93d372cbbb2ab3929f02fa9c0

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    if(this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
<<<<<<< HEAD
          <Route exact path='/checkout' component={CheckoutPage} />
=======
>>>>>>> 8dac5c63d920a1a93d372cbbb2ab3929f02fa9c0
          <Route
            exact path='/signin'
            render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)}
          />
        </Switch>
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
=======
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
>>>>>>> 8dac5c63d920a1a93d372cbbb2ab3929f02fa9c0
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
