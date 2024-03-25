import React from 'react'

function AddProductImageInputHandle() {
    return (
        <div><span id="inp_url_choose_file">
            <label htmlFor="url">Product URL</label>
            <input className="url_input_feild"
                type="text"
                name="url"
                id="url"
                placeholder="https..."
            // onChange={handlechange}
            // value={ProductData.url}
            /> </span> <span>
                <label htmlFor="select_file">select_file</label>
                <input className="input_feild"
                    type="file"
                    name="select_file"
                    id="select_file"
                    placeholder="https..."
                // onChange={handlechange}
                // value={ProductData.url}
                />
            </span></div>
    )
}

export default AddProductImageInputHandle