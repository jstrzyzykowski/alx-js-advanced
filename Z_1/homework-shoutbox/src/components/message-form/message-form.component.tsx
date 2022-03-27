import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import {v4 as uuid} from 'uuid';

import { useForm } from 'react-hook-form';
import {messageFormValidationOpt} from '../../yup/message-form.validation';

import { IEmojiData } from 'emoji-picker-react';

import { useDispatch } from 'react-redux';
import { addMessage, Message } from '../../redux/message/message.actions';

import CustomButton from '../common/custom-button/custom-button.component';
import CustomIconButton from '../common/custom-icon-button/custom-icon-button.component';
import ErrorNotification from '../common/error-notification/error-notification.component';
import CustomEmojiPicker from '../common/custom-emoji-picker/custom-emoji-picker.component';

import './message-form.styles.scss';

interface MessageFormData {
  name: string;
  message: string;
}

export default function MessageForm(): React.ReactElement {
  const [isEmojiPickerActive, setIsEmojiPickerActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    reset,
    getValues,
    setValue } = useForm<MessageFormData>(messageFormValidationOpt);

  const dispatch = useDispatch();

  const onEmojiClick = (event: React.MouseEvent, data: IEmojiData): void => {
    setValue('message', `${getValues('message')}${data.emoji}`);
    setIsEmojiPickerActive(false);
  }

  const sendMessage = ({name, message}: MessageFormData): void => {
    const newMessage: Message = {
      id: uuid(),
      author: name,
      createdAt: Date.now(),
      text: message,
    };

    dispatch(addMessage(newMessage));
    resetField('message');
  };

  const handleSaveClick = (): void => {
    const savedName = localStorage.getItem('shoutbox-nickname');
    const nameFromInput = getValues('name');

    if(savedName !== null && savedName === nameFromInput) {
      toast.warning('Nickname already saved');
      return;
    }

    if (
      nameFromInput.trim().length > 0 &&
      nameFromInput.trim().length >= 3
    ) {
      localStorage.setItem('shoutbox-nickname', nameFromInput);
      toast.success('Your nickname has been saved!');
    } else {
      toast.error('Nickname should be 3 characters at least');
    }
  };

  useEffect(() => {
    const loadedName = localStorage.getItem('shoutbox-nickname');

    if (loadedName) {
      reset({
        message: '',
        name: loadedName,
      });
    }
  }, []);

  return (
    <form className="messageForm" onSubmit={handleSubmit(sendMessage)}>
      <div className="messageForm__nameContainer">
        <input
          {...register("name")}
          type="text"
          placeholder="Nickname"
        />
        <CustomButton text="Save" type="button" handler={handleSaveClick} />
      </div>
      {errors.name?.message && <ErrorNotification errorMessage={errors.name.message} />}
      <div className="messageForm__messageContainer">
        <textarea
          {...register("message")}
          placeholder="Type something..."
          rows={4}
        />
        <div className="messageForm__messageContainer-optionContainer">
          <div className="messageForm__messageContainer-optionContainer-controllers">
            <CustomIconButton
              iconClassName="fa-solid fa-face-smile"
              onClick={() => setIsEmojiPickerActive(!isEmojiPickerActive)}
            />
            <CustomButton
              text="Shout!"
              outline={false}
              type="submit"
            />
          </div>
          { isEmojiPickerActive && <CustomEmojiPicker onEmojiClick={onEmojiClick} />}
        </div>
      </div>
      { errors.message?.message && <ErrorNotification errorMessage={errors.message.message} />}
    </form>
  );
}
