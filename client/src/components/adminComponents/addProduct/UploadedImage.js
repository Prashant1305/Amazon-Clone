import React from 'react';
import { RxCross2 } from "react-icons/rx";
import "./UploadedImage.css"

function UploadedImage({ url, removeUrl }) {
    const removeImage = (e, url) => {
        // console.log(removeUrl);
        removeUrl(url);
    }
    return (
        <div className='preview_image'>
            <div className='cross_btn' onClick={(e) => {
                // console.log(url);
                removeImage(e, url);
            }}><RxCross2 /></div>
            <img src={url} alt='failed to load' />
        </div>

    )
}

export default UploadedImage