import  {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../feature/Counter/CounterSlice'
import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;