import React from 'react';
import { Chat } from '../../components/templates/Chat';
import { CompanionListObject, MessageListObject } from '../../store';

const CompanionListData: Array<CompanionListObject> = [
  { id: 1, name: 'Danil Bruh', lastMessage: 'Wtf', sex: 'male' },
  { id: 2, name: 'Bulat Gonvuk', lastMessage: 'Go walk', sex: 'female' },
  { id: 3, name: 'Penivais Omskiy', lastMessage: 'Go drink beer 387', sex: 'male' },
  { id: 4, name: 'Oksi San', lastMessage: 'arigato', sex: 'female' },
  { id: 5, name: 'Billy Herrington', lastMessage: 'Semeen', sex: 'male' },
  { id: 6, name: 'Van Larr', lastMessage: 'Gucci', sex: 'male' },
  { id: 7, name: 'Lui Viton', lastMessage: 'Give me your many', sex: 'female' },
];

const MessageListDate: Array<MessageListObject> = [
  {
    id: 1,
    lastSeen: 'Last seen 3 minutes ago',
    dialog: [
      {
        idMessage: 1,
        isCompanionMessage: true,
        message: 'Koko lo',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        message: 'Kek',
      },
      {
        idMessage: 3,
        isCompanionMessage: true,
        message: 'Ubit Billa',
      },
      {
        idMessage: 4,
        isCompanionMessage: false,
        message: 'Uma TUrman',
      },
    ],
  },
  {
    id: 2,
    lastSeen: 'Last seen 5 minutes ago',
    dialog: [
      {
        idMessage: 1,
        isCompanionMessage: true,
        message: 'DHSHFDSHFJ',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
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
        message: 'MAMA',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
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
        isCompanionMessage: true,
        message: 'MAMA',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
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
        message: 'LEATHERMAN',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
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
        message: 'GUGG',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
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
        message: 'GMMMUGG',
      },
      {
        idMessage: 2,
        isCompanionMessage: false,
        message: 'BOSS',
      },
    ],
  },
];

export const ChatPage = () => {
  return <Chat MessageListDate={MessageListDate} CompanionListData={CompanionListData} />;
};
