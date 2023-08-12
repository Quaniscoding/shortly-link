import { configureStore } from '@reduxjs/toolkit'
import getLink from './getLink'
export const store = configureStore({
    reducer: { getLink }
})