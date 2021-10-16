import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/4.2 crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
<<<<<<< HEAD
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
=======
>>>>>>> 8dac5c63d920a1a93d372cbbb2ab3929f02fa9c0

import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className="logo-container" to="/" >
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon />
        </div> 
        {
            !hidden && <CartDropdown />
        }
    </div>
)

<<<<<<< HEAD
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
=======
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
>>>>>>> 8dac5c63d920a1a93d372cbbb2ab3929f02fa9c0
})

export default connect(mapStateToProps)(Header);