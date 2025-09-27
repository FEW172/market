import goodsData from "../../src/data/goods.json"

export function useGetGoods() {

    return {
        goods: goodsData
    }
}

