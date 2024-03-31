import React, { useEffect, useState } from 'react'
import { addImageApi } from '../../../utils/ApiUtils';
import { toast } from 'react-toastify';
import { MyLoginValues } from '../../../Context/AuthContext';
import { v4 as uuid } from 'uuid';
import UploadedImage from './UploadedImage';
import './AddProductImageInputHandle.css'


function AddProductImageInputHandle({ ProductData, setProductData }) {
    const [urlText, setUrlText] = useState("");
    const [urlArr, setUrlArr] = useState([]);
    const { token } = MyLoginValues();

    const handlechange = (e) => {
        setUrlText(e.target.value);
    }
    const addUrl = (url) => {
        urlText !== "" ? setUrlText(`${urlText}|${url}`) : setUrlText(`${url}`);
    }
    const removeUrl = (url) => {
        const temp = "|" + url;
        // console.log(temp);
        urlArr.length === 1 ? setUrlText("") : setUrlText(urlText.replace(temp, ""));
    }

    const handleChooseFileChange = async (e) => {
        // console.log(e.target.files[0]);
        const formData = new FormData();
        if (!e.target.files[0]) {
            return;
        }
        formData.append('myfile', e.target.files[0]);
        try {
            setUrlArr([...urlArr, ""]); // added empty string for showing loading
            const res = await addImageApi(token, formData);
            setUrlArr(urlArr.map((ele) => { // removing empty string for removing loading
                if (ele !== "") {
                    return ele;
                }
            }));
            if (res.status === 200) {
                toast.success("image uploaded succesfully");
                addUrl(`${res.data.url}`);
            }
            // console.log(res.data);
        } catch (error) {
            toast.error("failed to upload image");
            setUrlArr(urlArr.map((ele) => {
                if (ele !== "") {
                    return ele;
                }
            }));
            console.log(error);
        }
        // console.dir(e.target.value);
    }

    useEffect(() => {
        let tempUrlArr = urlText.split('|');
        if (tempUrlArr.length > 0) {
            tempUrlArr = tempUrlArr.map(element => {
                element = element.replace(" ", "");
                return element;
            })
        };
        // console.log(tempUrlArr);
        tempUrlArr = tempUrlArr.filter((url) => {
            return url !== ""
        })
        setProductData({ ...ProductData, url: [...tempUrlArr] });
        setUrlArr(tempUrlArr);
    }, [urlText]);

    return (
        <div id="inp_url_choose_file"> Product URL
            <div className='form_data' >
                <label htmlFor="url">Product URL</label>
                <input className="input_feild"
                    type="text"
                    name="url"
                    id="url"
                    placeholder="https..."
                    onChange={handlechange}
                    value={urlText}
                /> </div>
            <div>
                <label htmlFor="select_file">select_file</label>
                <input className="input_feild"
                    type="file"
                    name="select_file"
                    id="select_file"
                    placeholder="https..."
                    onChange={handleChooseFileChange}
                />
            </div>
            <div className='url_container'>
                {urlArr && urlArr.map((ele) => {
                    if (ele !== "") {
                        return (<div className='uploaded_image_single_image' key={uuid()}><UploadedImage url={ele} removeUrl={removeUrl} /></div>)
                    }
                    else {
                        return (<div className='uploaded_image_single_image' key={uuid()} > Loading</div>)
                    }
                })}
            </div>
        </div >
    )
}

export default AddProductImageInputHandle