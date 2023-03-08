import { configureStore } from '@reduxjs/toolkit';

export default function makeStore(reducer: any, preloadedState = undefined, extraArgument: any) {
  return configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
      }),
    preloadedState,
  });
}
