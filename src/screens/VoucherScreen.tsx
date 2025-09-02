import React, { useState, useEffect } from 'react';
import Voucher from '../Components/Voucher';
import { baseUrl} from '../services/NetworkService'; 
import { ApiNames } from '../constants/ApiNames';

const VoucherScreen = () => {
    const [posts, setPosts] = useState<[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${baseUrl}${ApiNames.categories}`);
                const result = await response.json();
                setPosts(result); 
            } catch (error) {
                console.error("Error fetching vouchers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {/* <Voucher /> */}
            <Voucher posts={posts} loading={loading} />
        </>
    );
};

export default VoucherScreen;