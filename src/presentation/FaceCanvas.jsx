/* Main presentational component */

import React from 'react';
import CameraView from './CameraView';
import ProductRects from './ProductRects'
// import PropTypes from 'prop-types';


class FaceCanvas extends React.Component {
    componentDidMount() {
        // Handle when screen size changes
        window.onresize = () => {
            this.props.handleWindowResize(window.innerWidth, window.innerHeight);        
        };
        window.onresize();
    }
    render() {
        // Write the style in here to avoid having
        // to use a CSS file
        const rootStyle = {
            textAlign: 'center', // ensure video is in the center
            width: '100vw', // Rest of view dedicated to the products
            height: this.props.windowHeight,
            overflow: 'hidden',
        }

        const svgStyle = {
            preserveAspectRatio: 'xMaxYMax',
            width: this.props.windowWidth,
            height: this.props.windowHeight,
            background: 'thistle',
            zIndex: 2,
            // The viewbox of the svg should fill the entire screen
            viewBox: [
                0,
                0,
                this.props.windowWidth,
                this.props.windowHeight,
            ],
            position: 'fixed',
            left: '0px',
            top: '0px',
            // Background of SVG is transparent to allow user to see camera view
            backgroundColor: 'transparent'
        };

        return (
            <div style={rootStyle}>
                {/* The component that shows what the camera is seeing */}
                <CameraView {...this.props}/>
                {/* The SVG overlays on top of the camera view with a transparent background */}
                <svg id='face-canvas' style={{ ...svgStyle }}>
                    <defs>
                        <filter id="shadow">
                            <feDropShadow dx="1" dy="1" stdDeviation="2" />
                        </filter>
                    </defs>

                    <ProductRects />
                </svg>
            </div>

        )
    }
}

// Proptypes to define required props
FaceCanvas.propTypes = {
};

export default FaceCanvas;