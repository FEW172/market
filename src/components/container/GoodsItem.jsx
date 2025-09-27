
export default function GoodsItem({ goodsData, button}) {

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
                {button}
                <br />
            </div>
        </>
    )
}

