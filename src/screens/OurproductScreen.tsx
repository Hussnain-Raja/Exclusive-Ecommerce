import React, { useEffect, useState } from 'react'
import Ourproduct from '../Components/Ourproduct'
import { getProductService } from '../services/GlobalServise';


const item_per_page = 10;

const OurproductScreen = () => {

    const [expProd, setExploreProd] = useState<any>([]);
    const [itemsToShow, setItemsToShow] = useState(item_per_page);

    useEffect(() => {
        getExploreProd();
    }, [])
    const handleLoadMore = () => {
        setItemsToShow(prevItemsToShow => prevItemsToShow + item_per_page);
    };

    const getExploreProd = async () => {
        try {
            let response = await getProductService();
            if (response) {
                setExploreProd(response);
            }
        } catch (error) {
            console.log("There is an error", error);
        }
    }
    return (
        <>
            <Ourproduct expProd={expProd} setExploreProd={setExploreProd}
            handleLoadMore={handleLoadMore} itemsToShow={itemsToShow} setItemsToShow={setItemsToShow}
            /> 
        </>
    )
}

export default OurproductScreen;