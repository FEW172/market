

import Button from "../button/button";

export default function GoodsItem({ goodsData }) {

    function handleClickButton() {

        console.log(goodsData);
        //console.log(basketData);
    }

    return (
        <>
            <div>
                <div>Идентификатор: {goodsData.id}</div>
                <div>Категория: {goodsData.category}</div>
                <div>Название: {goodsData.name}</div>
                <div>Символьный код: {goodsData.code}</div>
                <div>Цена: {goodsData.price}</div>
                <div>Рейтинг: {goodsData.rating}</div>
                <div>Количество на складе: {goodsData.quantity}</div>
                <div>
                    <Button text="Добавить в корзину" onClickButton={() => handleClickButton()} />
                </div>
                <br />
            </div>
        </>
    )
}

