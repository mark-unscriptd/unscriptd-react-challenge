import _ from 'lodash';
import { SET_IMAGE, SET_IMAGES } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_IMAGES: {
            return _.keyBy(action.payload, 'id');
        }
        case SET_IMAGE: {
            const image = action.payload;
            return {
                ...state,
                [image.id]: image
            };
        }
        default:
            return state;
    }
}