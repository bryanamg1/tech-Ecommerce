import { useState } from "react";
import "../css/itemCount.css";

export function ItemCount({ stock, onAdd }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < stock) {
        setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };

    const handleAdd = ()=>{
        onAdd(count)
    }

    return (
        <div className="count-container">
        <div className="count-controls">
            <button
            onClick={decrement}
            disabled={count === 0}
            >
            -
            </button>

            <span>{count}</span>

            <button
            onClick={increment}
            disabled={count === stock}
            >
            +
            </button>
        </div>

        <button
            className="add-cart-btn"
            disabled={count === 0}
            onClick={handleAdd}
        >
            Agregar al carrito
        </button>
        </div>
    );
    }