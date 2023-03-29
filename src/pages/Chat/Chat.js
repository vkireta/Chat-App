import React, { useState, useEffect } from 'react';
import Messages from '../../components/Messages/Messages/Messages';
import MessageInput from '../../components/Messages/MessageInput/MessageInput';

import classes from './Chat.module.css';

export default function Chat(props) {
  const [messages, setMessages] = useState([]);
  const [roomConnection, setRoomConnection] = useState(false);

  useEffect(() => {
    if (props.currentUser) {
      roomConnect(props.drone);
    }
  }, [props.currentUser, props.drone]);

  const roomConnect = (drone) => {
    const room = drone.subscribe('observable-room');

    room.on('open', (error) => {
      if (error) {
        setRoomConnection(false);
      }
      setRoomConnection(true);
    });

    room.on('data', (data, member) => {
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            user: {
              id: member.clientData.id,
              username: member.clientData.username,
              avatar: member.clientData.avatar,
            },
            text: data.text,
            timestamp: data.timestamp,
            id: data.timestamp,
            type: 'USER_MESSAGE',
          },
        ];
      });
    });
  };

  const onSendMessage = (text) => {
    roomConnection &&
      props.drone.publish({
        room: 'observable-room',
        message: {
          text: text,
          timestamp: Date.now(),
        },
      });
    console.log('Message sent!');
  };

  return (
    <div className={classes.chat}>
      <div className={classes.messages}>
        <Messages messages={messages} currentUser={props.currentUser} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}
