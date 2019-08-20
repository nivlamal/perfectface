/** Example container **/
/*
    A container component is used to connect
    a presentation component to the redux store.
    It exists so that presentation components
    codes can be focused on graphic design.
*/

import { connect } from 'react-redux';
import { handleWindowResize, setCameraStatus } from '../redux/actions';
import FaceCanvas from '../presentation/FaceCanvas';

// Maps redux state to Presentation1's props
// since this example uses a combineReducer,
// each specific reducer has their own state
const mapStateToProps = state => ({
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight,
    isCameraStreamActive: state.isCameraStreamActive,
});

const mapDispatchToProps = dispatch => ({
    handleWindowResize: (width, height) => dispatch(handleWindowResize(width, height)),
    setCameraStatus: (status) => dispatch(setCameraStatus(status))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FaceCanvas);