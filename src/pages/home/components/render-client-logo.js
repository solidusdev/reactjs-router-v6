import React, { Fragment } from "react";

// the function takes an object parameter
const RenderingClientLogos = (props) => {

    // destructuring object properties into individual component props  - ES6
    const {src, alt} = props;

    // new variables still point to props
    const image_src = src;
    const image_alt = alt;
    
    return(
        <Fragment>
            <div className="client-logo-container">
                <img src={image_src} alt={image_alt} />
            </div>
        </Fragment>
    )
};

export default RenderingClientLogos;