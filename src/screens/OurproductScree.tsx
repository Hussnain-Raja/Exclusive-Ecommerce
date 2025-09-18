import React ,{useEffect, useState} from 'react'
import Ourproduct from '../Components/Ourproduct'

const OurproductScree = () => {
    
    const [expProd,setExploreProd]= useState<[]>();

    useEffect(()=>{
        try {
            
        } catch (error) {
            console.log("There is an error",error)
        }
    },[])

    return (
        <>
            <Ourproduct />
        </>
    )
}

export default OurproductScree