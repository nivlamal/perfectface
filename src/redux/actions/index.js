/** This file represents all the actions that can be performed **/
/** by the redux store. It also specifies the inputs required  **/
/** for each action. The actions themselves are not performed  **/
/** here but at the reducers                                   **/

// The strings that represent the action type
export const HANDLE_WINDOW_RESIZE = 'HANDLE_WINDOW_RESIZE';
export const EXAMPLE_ACTION1 = 'EXAMPLE_ACTION1';
export const EXAMPLE_ACTION2 = 'EXAMPLE_ACTION2';
export const GET_CAMERA = 'GET_CAMERA';
export const SET_CAMERA_STATUS = 'SET_CAMERA_STATUS';

// Get camera device stream
export const getCamera = () => ({
    type: GET_CAMERA
});

// Set status of camera stream (true means camera stream is already active)
export const setCameraStatus = (status) => ({
    type: SET_CAMERA_STATUS,
    status
});

// Get new window width and height
export const handleWindowResize = (width, height) => ({
    type: HANDLE_WINDOW_RESIZE,
    width,
    height
});

// Action with no input required
export const exampleAction1 = () => ({
    // It is represented by the string 'EXAMPLE_ACTION1'
    type: EXAMPLE_ACTION1 
});

// Action with inputs required
export const exampleAction2 = (text, flag) => ({
    // It is represented by the string 'EXAMPLE_ACTION2'
    type: EXAMPLE_ACTION2,
    text, // Requires 'text' and 'flag' parameters
    flag
});