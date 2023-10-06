import recorderReducer from './recorder';
import userEventsReducer from './user-events';

export const rootReducer = {
  userEvents: userEventsReducer,
  recorder: recorderReducer,
};
