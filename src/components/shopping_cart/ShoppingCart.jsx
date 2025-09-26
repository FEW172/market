import { useState } from "react";
import Button from "../button/button";

export default function ShoppingCart() {

    const [basketData, setBasketData] = useState([]);
    console.log(basketData);

    const handleClickButton = (text) => {

        switch (text) {
            case "Удалить все":

                break;
            case "Добавить":

                break;
            case "Убрать":

                break;
            default:

        }
    };

    if (basketData && basketData.isConfirmed) {
        return (
            <div>
            {basketData.error ?
                            <p>Товары отсутствуют</p> :
                            <BasketList basketData={baskedData} />
                        }
                <Button
                    text="Удалить все"
                    onClickButton={() => handleClickButton("Удалить все")} />
            </div>
        );
    } else {
        return (
            <div>
                В корзине нет товаров
            </div>
        );

    }
}
