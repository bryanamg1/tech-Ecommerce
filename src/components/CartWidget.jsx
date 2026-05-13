import { ShoppingCart } from 'lucide-react';

const CartWidget = () => {
    return (
        <div className="cart-container">
        <ShoppingCart size={24} color="white" />
        <span className="cart-badge">0</span>
        </div>
    );
};

export default CartWidget;