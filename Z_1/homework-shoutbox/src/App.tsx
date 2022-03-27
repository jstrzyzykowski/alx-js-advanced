import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {loadMessageFromLocal} from './redux/message/message.actions';
import {RootState} from './redux/root.reducer';

import Shoutbox from './components/shoutbox/shoutbox.component';
import CustomToastContainer from './components/common/custom-toast-container/custom-toast-container.component';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const { messages } = useSelector((state: RootState) => state.message);

  useEffect(() => {
    const messagesString =
      localStorage.getItem('shoutbox-messages') ?? JSON.stringify([]);
    const messages = JSON.parse(messagesString);

    dispatch(loadMessageFromLocal(messages));
  }, []);

  useEffect(() => {
    localStorage.setItem('shoutbox-messages', JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="app">
      <Shoutbox />
      <CustomToastContainer />
    </div>
  );
}

export default App;
