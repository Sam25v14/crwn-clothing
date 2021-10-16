import React from 'react';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../assets/11.1 shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
<<<<<<< HEAD
import { createStructuredSelector } from "reselect";
=======
>>>>>>> 8dac5c63d920a1a93d372cbbb2ab3929f02fa9c0

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

<<<<<<< HEAD
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
=======
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
>>>>>>> 8dac5c63d920a1a93d372cbbb2ab3929f02fa9c0
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);