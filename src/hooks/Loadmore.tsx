import { useState } from "react";

const item_per_page = 4;

export default function useLoadMore() {
    const [itemsToShow, setItemsToShow] = useState(item_per_page);
    const handleLoadMore = () => {
        setItemsToShow(prevItemsToShow => prevItemsToShow + item_per_page);
    };
    return { itemsToShow, handleLoadMore };
}
