
export default function GoodsItem({ goodsData, detailed, children }) {



    return (
        <div>

            {/*             {detailed ? */}
            {/*                 <div>Идентификатор: {goodsData.id}</div> : <div> id: {goodsData.id}</div> */}
            {/*             } */}

            {detailed ?
                <div>Идентификатор: {goodsData.id}</div> : null
            }

            {detailed ?
                <div>Доступность: {goodsData.availability ? <>Да</> : <>Нет</>}</div> : null
            }

            {detailed ? <div>Категория: {goodsData.category}</div> : null}

            <div><b>{goodsData.name}</b></div>
            <div>Цена: {goodsData.price}</div>
            <div>Количество на складе: {goodsData.quantity}</div>
            <div>Рейтинг: {goodsData.rating}</div>

            {children}
            <br />
        </div>
    )
}

