import React, { useEffect, useState } from 'react'
import Ourproduct from '../Components/Ourproduct'
import { getProductService } from '../services/GlobalServise';

const OurproductScreen = () => {
    const [expProd, setExploreProd] = useState<any>([]);

    useEffect(() => {
        getExploreProd();
    }, [])

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
            <Ourproduct expProd={expProd} setExploreProd={setExploreProd} />
        </>
    )
}

export default OurproductScreen;