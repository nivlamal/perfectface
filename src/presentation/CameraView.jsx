/* The presentational component to display the camera view */

import React from 'react';
import getCameraStream from '../utils/getCameraStream';

import PropTypes from 'prop-types';

const CameraView = (props) => {
    // Write the style in here to avoid having
    // to use a CSS file    
    var width = '100%'
    var height = ''
    if(props.windowHeight > props.windowWidth) {
        width = '';
        height = '100%'
    }

    const videoPlayerStyle = {
        // The video will fill the entire container div
        width: width,
        height: height,
        transform: 'rotateY(180deg)',
        WebkitTransform: 'rotateY(180deg)', /* Safari and Chrome */        
        MozTransformStyle: 'rotateY(180deg)',/* Firefox */
    };

    console.log(props);

    // If camera not active yet
    if(!props.isCameraStreamActive) {
        // Try to get the camera stream
        getCameraStream(getCameraStreamCallback, getCameraStreamErrorCallback);
        // Set the camera status of the APP state to TRUE
        props.setCameraStatus(true);
    }    

    return (
        <video
            id='camera-view'
            style={videoPlayerStyle}
            autoPlay
        />
    )
}

// Callback if getCameraStream is successful
function getCameraStreamCallback(stream) {
    // Find the videoPlayer element
    var player = document.getElementById('camera-view');
    // Set the videoPlayer element's video stream
    player.srcObject = stream;
    player.play();    
}

// Callback if getCameraStream is unsuccessful
function getCameraStreamErrorCallback(error) {
    // Popup alert with error message
    alert('Error getting media stream ' + error);
}

export default CameraView;

CameraView.propTypes = {
    windowWidth: PropTypes.number.isRequired,
    windowHeight: PropTypes.number.isRequired,
};