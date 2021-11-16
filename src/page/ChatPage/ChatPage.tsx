import React, { useEffect } from 'react';
import { Chat } from '../../components/templates/Chat';
import { CompanionListObject, MessageListObject } from '../../store';

const CompanionListData: Array<CompanionListObject> = [
  { id: 1, name: 'Danil Bruh', sex: 'male' },
  { id: 2, name: 'Bulat Gonvuk', sex: 'female' },
  { id: 3, name: 'Penivais Omskiy', sex: 'male' },
  { id: 4, name: 'Oksi San', sex: 'female' },
  { id: 5, name: 'Billy Herrington', sex: 'male' },
  { id: 6, name: 'Van Larr', sex: 'male' },
  { id: 7, name: 'Lui Viton', sex: 'female' },
];

const MessageListDate: Array<MessageListObject> = [
  {
    id: 1,
    lastSeen: 'Last seen 3 minutes ago',
    dialog: [
      {
        idMessage: 1,
        isCompanionMessage: true,
        type: 'text',
        message: 'Koko lo',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 3,
        isCompanionMessage: true,
        type: 'file',
        size: '1.1MB',
        message: 'Ubit Billa',
      },
      {
        idMessage: 4,
        isCompanionMessage: false,
        type: 'file',
        size: '10.1MB',
        message: 'Uma TUrman',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'Kek',
      },
    ],
  },
  {
    id: 2,
    lastSeen: 'Last seen 5 minutes ago',
    dialog: [
      {
        idMessage: 1,
        isCompanionMessage: false,
        type: 'text',
        message: 'DHSHFDSHFJ',
      },
      {
        idMessage: 2,
        isCompanionMessage: true,
        type: 'text',
        message: 'beeeerrr',
      },
    ],
  },
  {
    id: 3,
    lastSeen: 'Last seen 5 year ago',
    dialog: [
      {
        idMessage: 1,
        isCompanionMessage: true,
        type: 'text',
        message: 'MAMA',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'PAPA',
      },
    ],
  },
  {
    id: 4,
    lastSeen: 'Last seen 5 year ago',
    dialog: [
      {
        idMessage: 1,
        isCompanionMessage: false,
        type: 'text',
        message: 'MAMA',
      },
      {
        idMessage: 2,
        isCompanionMessage: true,
        type: 'text',
        message: 'PAPA',
      },
    ],
  },
  {
    id: 5,
    lastSeen: 'Last seen 5 year ago',
    dialog: [
      {
        idMessage: 1,
        isCompanionMessage: true,
        type: 'text',
        message: 'LEATHERMAN',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: '300BUCKS',
      },
    ],
  },
  {
    id: 6,
    lastSeen: 'Last seen 5 year ago',
    dialog: [
      {
        idMessage: 1,
        isCompanionMessage: true,
        type: 'text',
        message: 'GUGG',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'FUCK',
      },
    ],
  },
  {
    id: 7,
    lastSeen: 'Last seen 5 year ago',
    dialog: [
      {
        idMessage: 1,
        isCompanionMessage: true,
        type: 'text',
        message: 'GMMMUGG',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        type: 'text',
        message: 'BOSS',
      },
    ],
  },
];

export const ChatPage = () => {
  /* const wsChannel = new WebSocket(
      `ws://109.194.37.212:2346/?type=test&ws_id=${localStorage.getItem('connect_key')}`
    );
    useEffect(() => {
      wsChannel.addEventListener('error', e => {
        console.log(e);
      });
    }, []); */
  return <Chat MessageListDate={MessageListDate} CompanionListData={CompanionListData} />;
};
