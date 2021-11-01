export interface CompanionListObject {
  id: number;
  name: string;
  lastMessage: string;
  sex: string;
}

export type DialogMessageDataType = {
  idMessage: number;
  sender: string;
  message: string;
};

export interface MessageListObject {
  id: number;
  lastSeen: string;
  dialog: Array<DialogMessageDataType>;
}
