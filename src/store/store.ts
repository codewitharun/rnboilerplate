import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../redux/auth';
import {useDispatch} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
