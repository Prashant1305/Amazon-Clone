import React, { useEffect } from 'react'
import { data } from './data';
import axios from 'axios';
import { baseUrl } from "../../Constant";

function Temp() {
    const cleanNumberString = (str) => {
        let ans = "";
        for (let i of str) {
            if (i == '0' || i === '1' || i === '2' || i === '3' || i === '4' || i === '5' || i === '6' || i === '7' || i === '8' || i === '9' || i === '.') {
                ans += i;
            }
        }
        if (ans[ans.length - 1] === '.') {
            ans = ans.substring(0, ans.length - 1);
        }
        return ans;
    }
    const cleanData = () => {
        let wrkData = data.map(async (item) => {
            try {
                const res = await axios.get(item.img_link);
                if (res.status === 200) {
                    // console.log(item.img_link);
                    const ob = {
                        id: item.product_id,
                        name: item.product_name,
                        category: item.category,
                        actual_price: Number(cleanNumberString(item.actual_price)),
                        discounted_price: Number(cleanNumberString(item.discounted_price)),
                        discount_percentage: Number(cleanNumberString(item.discount_percentage)),
                        about: item.about_product,
                        url: item.img_link,
                        rating: Number(cleanNumberString(item.rating)),
                        rating_count: Number(cleanNumberString(item.rating_count)),
                    }
                    try {
                        console.log(ob);
                        const postRes = await axios.post(`${baseUrl}/api/product/add`, ob, {
                            headers: {
                                "Content-Type": "application/json",
                            }
                        });
                    } catch (error) {
                        console.log("failed to upload");
                    }
                    // console.log(ob);
                }
            } catch (error) {
                console.log("failed to fetch img")
            }

        })
        // console.log(cleanNumberString("qwert12.36.qwe"));
    }
    useEffect(() => {
        cleanData();
    }, []);
    return (
        <div>Temp</div>
    )
}

export default Temp
