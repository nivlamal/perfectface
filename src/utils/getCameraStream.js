// Function to get the camera stream
// of the client machine
export default function getCameraStream(successCallback, failureCallback) {
    // Check if any media API is supported by the client
    if (!navigator.mediaDevices.getUserMedia && !navigator.webkitGetUserMedia &&
        !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
            alert('User Media API not supported.'); // If none supported, give an alert
            return;
        }

    // Set constraints parameter of 'getUserMedia'
    const constraints = {
        video: true
    };

    // Set the media API to the appropriate one base on the client
    const api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;

    return api.bind(navigator)(constraints, successCallback, failureCallback);
};