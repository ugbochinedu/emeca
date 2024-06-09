import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../slices/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore ({
    reducer: {
        counter: counterReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
  })

  setupListeners(store.dispatch);

// Infer the type of makeStore
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch