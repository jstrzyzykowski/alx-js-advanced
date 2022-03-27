import { MessageActions, MessageTypes } from './message.types';
import { Message } from './message.actions';

interface MessageReducerState {
  messages: Message[];
}

const initialState = {
  messages: [],
};

const messageReducer = (
  state: MessageReducerState = initialState,
  action: MessageActions,
): MessageReducerState => {
  switch (action.type) {
    case MessageTypes.LOAD_MESSAGES_FROM_LOCAL:
      return {
        ...state,
        messages: action.payload,
      };
    case MessageTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default messageReducer;
