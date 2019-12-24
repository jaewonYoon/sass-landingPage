import React from 'react';
import './Image.styles.scss'; 
const ImageComponent = ({url}) => {
    return(
        <div className="item-image-container">
            <img src={url} className="item-image"></img>
        </div>
    )
}

export default ImageComponent;