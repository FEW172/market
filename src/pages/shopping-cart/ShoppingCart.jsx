import { useDispatch, useSelector } from "react-redux";
import { add, remove, clear, allShoppingCart, countPriceProductsInShoppingCart } from "../../slice/ShoppingCartSlice";
import Button from "../../components/button/Button";

export default function ShoppingCart() {

    const dispatch = useDispatch();
    const productsInShoppingCart = useSelector(allShoppingCart);

    const totalPriceCartCount = useSelector(countPriceProductsInShoppingCart);

    const handleClearShoppingCart = () => {
        dispatch(clear());
    }

    const addItem = (item) => {
        dispatch(add(item));
    };

    const removeItem = (item) => {
        dispatch(remove(item));
    };

    return (

        <>
            <h1>Корзина</h1>

            {productsInShoppingCart.length === 0 ? (
                <p>В корзине нет товаров</p>
            ) : (
                <div className="cart-items">
                    {productsInShoppingCart.map((item) => (
                        <div key={item.id} className="cart-item">
                            {item.name}
                            <div className="item-controls">
                                <button onClick={() => removeItem(item)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => addItem(item)}>+</button>
                            </div>
                            <span className="item-price">{item.price * item.quantity}</span>
                        </div>
                    ))}
                    <br />
                    <div className="cart-total">
                        <span>Итого: {totalPriceCartCount}</span>
                    </div>
                    <Button text="Очистить корзину" onClickButton={handleClearShoppingCart} />
                </div>
            )}
        </>

    );
}