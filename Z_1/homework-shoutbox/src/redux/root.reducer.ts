import { combineReducers } from 'redux';

import messageReducer from './message/message.reducer';

export const rootReducer = combineReducers({
  message: messageReducer,
});

export type RootState = ReturnType<typeof rootReducer>
