import React from 'react';

import Picker, {IEmojiData} from 'emoji-picker-react';

interface CustomEmojiPickerProps {
  onEmojiClick: (event: React.MouseEvent, data: IEmojiData) => void;
}

export default function CustomEmojiPicker({ onEmojiClick }: CustomEmojiPickerProps): React.ReactElement {
  return (
    <Picker pickerStyle={{
      maxHeight: "250px",
      width: "100%",
      marginTop: '5px',
    }} onEmojiClick={onEmojiClick} disableSkinTonePicker />
  );
}