import { combineReducers } from 'redux';
import imagesReducer from './imagesReducer';

/***
 * Redux Root Reducer
 *
 * @author: Callistus Tan
 */
const rootReducer = combineReducers({
    images: imagesReducer
});

export default rootReducer;