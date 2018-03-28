import axios from 'axios';
import { SET_IMAGES, SET_IMAGE } from './types';

export const getImages = () => {
    console.log('getting images');
    return async dispatch => {
        const { data } = await axios.get('http://localhost:3010/images');

        dispatch({
            type: SET_IMAGES,
            payload: data
        })
    };
};

export const searchImages = term => {
    return async dispatch => {
        console.log(`searching ${term}`);
        const { data } = await axios.get(`http://localhost:3010/images?caption_like=${term}`);
        console.log(data);

        dispatch({
            type: SET_IMAGES,
            payload: data
        })
    };
};

export const updateImage = image => {
    return async dispatch => {
        const { data } = await axios.put(`http://localhost:3010/images/${image.id}`, image);

        dispatch({
            type: SET_IMAGE,
            payload: data
        })
    };
};

export const toggleSelect = data => {
    return {
        type: SET_IMAGE,
        payload: data
    };
};

export const deleteImage = image => {
    return async dispatch => {
        await axios.delete(`http://localhost:3010/images/${image.id}`);
        dispatch(getImages());
    };
};