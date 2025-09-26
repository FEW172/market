import GoodsItem from "./GoodsItem"

export default function Goods({ goodsData }) {
      const goods = goodsData
             .map(goodsItem => <GoodsItem key={goodsItem.id} goodsData={goodsItem} />)

        return (
            <div>
                {goods}
            </div>
        )
}