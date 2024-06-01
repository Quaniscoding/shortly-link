import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    error: null,
};

const getLink = createSlice({
    name: 'getLink',
    initialState,
    reducers: {
        getData: (state, action) => {
            state.data = [...state.data, action.payload];
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { getData, setError, clearError } = getLink.actions;
export default getLink.reducer;

export const callGetLink = (urlLink) => {
    return async (dispatch) => {
        try {
            const response = await axios({
                method: 'POST',
                url: 'https://url-shortener-service.p.rapidapi.com/shorten',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': 'c12f8cfcd3mshd5be65096c083fcp1b64d3jsn92f9ca194696',
                    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
                },
                data: { url: urlLink },
            });
            const dataWithUrlLink = {
                ...response.data,
                combineUrl: urlLink,
            };
            dispatch(getData(dataWithUrlLink));
            dispatch(clearError());
        } catch (error) {
            if (error.response && error.response.status === 400) {
                dispatch(setError(error.response.data.error));
            } else {
                dispatch(setError('An unexpected error occurred.'));
            }
        }
    };
};
