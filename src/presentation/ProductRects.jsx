/* The presentational component to display the products */

import React from 'react';

const ProductRects = (props) => {
    // Write the style in here to avoid having
    // to use a CSS file
    const rectStyle = {
      x: 0,
      y: 0,
      width: 50,
      height: 50,
      border: '1px solid blue',
      fill: 'blue'
    };

    return(
        <g style={{ order:10}}>
            <rect style={{...rectStyle,}}/>
        </g>
    )
}

export default ProductRects;