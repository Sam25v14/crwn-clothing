import React from 'react';

import CustomButton from "../custom-button/custom-button.component";

import { connect } from 'react-redux';
import { selectCartItems } from "../../redux/cart/cart.selectors";
<<<<<<< HEAD
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
=======
>>>>>>> 8dac5c63d920a1a93d372cbbb2ab3929f02fa9c0

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

<<<<<<< HEAD
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))
                    :
                    <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
=======
const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
>>>>>>> 8dac5c63d920a1a93d372cbbb2ab3929f02fa9c0
