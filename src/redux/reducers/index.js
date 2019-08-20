/** Root reducer **/
/*  
    This app only requires one reducer
    unless the complexity of the app increases.
*/

// Import action definition(s)
import { HANDLE_WINDOW_RESIZE } from '../actions';
import { SET_CAMERA_STATUS } from '../actions';

// Declare the initial state of this reducer
// The state of the reducer will be accessible
// by all containers
const initialState = {
    windowHeight: 0,
    windowWidth: 0,
    isCameraStreamActive: false,
}

// The actions that can be performed by the app
// will be performed below
function rootReducer(state = initialState, action) {
    switch(action.type) {
        case HANDLE_WINDOW_RESIZE:
            return {
                ...state,
                windowHeight: action.height,
                windowWidth: action.width,
            };
        case SET_CAMERA_STATUS:
            return {
                ...state,
                isCameraStreamActive: action.status,
            }
        default:
            return state;
    }
}

export default rootReducer;