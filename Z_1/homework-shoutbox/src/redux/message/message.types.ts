import { AddMessageAction, LoadMessagesFromLocalAction } from './message.actions';

export enum MessageTypes {
  'LOAD_MESSAGES_FROM_LOCAL',
  'ADD_MESSAGE',
}

export type MessageActions = AddMessageAction | LoadMessagesFromLocalAction;
