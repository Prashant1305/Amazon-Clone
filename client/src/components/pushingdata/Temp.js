import React, { useEffect } from 'react'
import { data } from './data';
import axios from 'axios';
import { baseUrl } from "../../Constant";

function Temp() {
    const cleanNumberString = (str) => {
        let ans = "";
        for (let i of str) {
            if (i === '0' || i === '1' || i === '2' || i === '3' || i === '4' || i === '5' || i === '6' || i === '7' || i === '8' || i === '9' || i === '.') {
                ans += i;
            }
        }
        if (ans[ans.length - 1] === '.') {
            ans = ans.substring(0, ans.length - 1);
        }
        return ans;
    }
    const getRandomStock = () => {
        let randNumber = Math.floor(Math.random() * 6);
        return randNumber;
    }

    const cleanData = () => {
        data.map(async (item) => {
            try {
                const res = await axios.get(item.img_link);
                if (res.status === 200) {
                    // console.log(item.img_link);
                    const ob = {
                        id: item.product_id,
                        name: item.product_name,
                        stock_quantity: getRandomStock(),
                        category: item.category,
                        actual_price: Number(cleanNumberString(item.actual_price)),
                        discounted_price: Number(cleanNumberString(item.discounted_price)),
                        discount_percentage: Number(cleanNumberString(item.discount_percentage)),
                        about: item.about_product,
                        url: [item.img_link],
                        rating: Number(cleanNumberString(item.rating)),
                        rating_count: Number(cleanNumberString(item.rating_count)),
                    }
                    try {
                        console.log(ob);
                        await axios.post(`${baseUrl}/api/admin/product/addproduct`, ob, {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWJkZWZlZjU2ZWVmZTE4ZWZmODQzZmIiLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImlhdCI6MTcxMTM4MzA5NywiZXhwIjoxNzEzOTc1MDk3fQ.5ytIWIaQV0CR_2VsMyHU6foBASrIa0q-bekLjql9FZY"
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
