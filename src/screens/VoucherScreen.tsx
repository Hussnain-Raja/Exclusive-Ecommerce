import React, { useState, useEffect } from 'react';
import Voucher from '../Components/Voucher';
import { baseUrl } from '../services/NetworkService';
import { ApiNames } from '../constants/ApiNames';
import axios from 'axios';
import { getRequest } from '../services/NetworkService';
import { getCategroyService } from '../services/GlobalServise';
import { Category } from '../@types/ApiResponses';

const VoucherScreen = () => {
    const [posts, setPosts] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getVoucherList = async () => {
            try {
                setLoading(true);
                // const response = await getRequest(`${ApiNames.categories}`);
                let response = await getCategroyService()
                if (response) {
                    setPosts(response)
                }
            } catch (err) {
                console.error("Error fetching vouchers:", err);
            } finally {
            }
                setLoading(false);
        };
        getVoucherList();
    }, []);
    return (
        <>

            <Voucher posts={posts} loading={loading} />
        </>
    );
};

export default VoucherScreen;