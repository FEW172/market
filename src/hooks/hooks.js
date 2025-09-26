import goodsData from "../../src/data/goods.json"

export function useGetGoods() {

    const filterText = "all";
    const error = null;

    return {
        error: error,
        filter: filterText,
        goods: goodsData
    }
}

