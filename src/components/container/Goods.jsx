import GoodsItem from "./GoodsItem"

export default function Goods({ goodsData }) {
    const goods = goodsData
        .filter(goodsItem => goodsItem.availability)
        .map(goodsItem => <GoodsItem key={goodsItem.id} goodsData={goodsItem} />)

    return (
        <>
            <div>
                {goods}
            </div>
        </>
    )
}