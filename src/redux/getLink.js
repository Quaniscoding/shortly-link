import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    data: []
}

const getLink = createSlice({
    name: "getLink",
    initialState,
    reducers: {
        getData: (state, { type, payload }) => {
            {
                state.data = payload
            }
        }
    }
});

export const { getData } = getLink.actions

export default getLink.reducer
export const callGetLink = (urlLink) => {
    return async (dispatch) => {
        try {
            const callGetLink = await axios({
                method: "GET",
                url: `https://api.shrtco.de/v2/shorten?url=${urlLink}`
            })
            dispatch(getData(callGetLink.data))
        } catch (error) {
            console.log(error);
        }
    }
} 