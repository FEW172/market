import { useState } from "react";
import Button from "../button/button";
import { useGetGoods } from "../../hooks/hooks";
import GoodsItem from "../container/GoodsItem";

export default function ShoppingCart() {

    const goodsList = useGetGoods();

    const [goods, setGoods] = useState(goodsList.goods ? goodsList.goods : []);
    const [filteredGoods, setFilteredGoods] = useState(goodsList.goods ? goodsList.goods : []);

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            if (existingItem.quantity < item.quantity) {
                console.log("+");
                setCart(
                    cart.map((cartItem) =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    )
                );
            }

        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
        setTotal(total + item.price);
    };

    const removeItem = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        if (existingItem.quantity === 1) {
            setCart(cart.filter((cartItem) => cartItem.id !== item.id));
        } else {
            setCart(
                cart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        }
        setTotal(total - item.price);
    };

    const handleChangeSearchInput = (search) => {
        if (search !== '') {
            const filteredData = goods.filter((item) => {
                return Object.values(item.name).join('').toLowerCase().includes(search.toLowerCase())
            })
            setFilteredGoods(filteredData)
        } else {
            setFilteredGoods(goods)
        }
    }

    const handleSortButtonClick = (text) => {
        switch (text) {
            case "Сортировать по цене":
                setFilteredGoods([...filteredGoods].sort((a, b) => a.price - b.price));
                break;
            case "Сортировать по рейтингу":
                setFilteredGoods([...filteredGoods].sort((a, b) => a.rating - b.rating));
                break;
            default:
                setGoods(filteredGoods);
        }
    };

    const goodsShow = filteredGoods
        .filter(goodsItem => goodsItem.availability)
        .map(goodsItem => <GoodsItem
            key={goodsItem.id}
            goodsData={goodsItem}
            button={<Button text="Добавить в корзину" onClickButton={() => addItem(goodsItem)}
            />} />)


    return (
        <div className="shopping-cart">
            <h2>Корзина:</h2>
            {cart.length === 0 ? (
                <p>В корзине нет товаров</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
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
                </div>
            )}

            <div className="goods-list">
                <h2>Товары</h2>

            </div>
            <div>
                <input
                    type="text"
                    name="text"
                    onChange={(e) => handleChangeSearchInput(e.target.value)}
                    placeholder="Поиск товара"
                />
            </div>
            <div>
                <Button
                    text="Сортировать по цене"
                    onClickButton={() => handleSortButtonClick("Сортировать по цене")} />
                <Button
                    text="Сортировать по рейтингу"
                    onClickButton={() => handleSortButtonClick("Сортировать по рейтингу")} />
            </div>

            {goodsList.error ?
                <p>Товары отсутствуют</p> :
                <>
                    {goodsShow}

                </>
            }

        </div>
    );
}
