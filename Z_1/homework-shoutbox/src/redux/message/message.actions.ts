import { MessageTypes } from './message.types';

export interface Message {
  id: string;
  author: string;
  createdAt: number;
  text: string,
}

export interface LoadMessagesFromLocalAction {
  type: MessageTypes.LOAD_MESSAGES_FROM_LOCAL,
  payload: Message[],
}

export function loadMessageFromLocal(messages: Message[]): LoadMessagesFromLocalAction {
  return {
    type: MessageTypes.LOAD_MESSAGES_FROM_LOCAL,
    payload: messages,
  }
}

export interface AddMessageAction {
  type: MessageTypes.ADD_MESSAGE;
  payload: Message;
}

export function addMessage(message: Message): AddMessageAction {
  return {
    type: MessageTypes.ADD_MESSAGE,
    payload: message,
  };
}
