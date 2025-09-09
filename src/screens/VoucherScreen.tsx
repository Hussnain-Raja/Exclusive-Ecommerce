import React, { useState, useEffect } from 'react';
import Voucher from '../Components/Voucher';
import { baseUrl } from '../services/NetworkService';
import { ApiNames } from '../constants/ApiNames';
import axios from 'axios';

const VoucherScreen = () => {
    const [posts, setPosts] = useState<[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getVoucherList = async () => {
            try {
                setLoading(true);
                const res = await axios({
                    method: 'GET',
                    url: `${baseUrl}${ApiNames.categories}`,
                    headers: {
                        'Content-Type': 'application/json',
                        Connection: 'close',
                        Authorization: `Bearer ${global.authToken}`
                    },
                });
                // You may want to setPosts(res.data) here
                setPosts(res.data);
                setLoading(false);
            } catch (error: any) {
                console.error('Error fetching vouchers:', error);
            }
        };
        getVoucherList();
    }, []);



    //     const response = await fetch(`${baseUrl}${ApiNames.categories}`);
    //     const result = await response.json();
    //     setPosts(result); 
    // } catch (error) {
    //     console.error("Error fetching vouchers:", error);
    // } finally {
    //     setLoading(false);
    // }
    // };

    // getVoucherList();
    //  []);

    return (
        <>
            {/* <Voucher /> */}
            <Voucher posts={posts} loading={loading} />
        </>
    );
};

export default VoucherScreen;