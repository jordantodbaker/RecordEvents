import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from './index';
import { UserEventsState } from './user-events';
import { RecorderState } from './recorder';

export interface RootState {
  userEvents: UserEventsState;
  recorder: RecorderState;
}

//export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({ reducer: rootReducer as any }); //TODO fix any

export default store;
