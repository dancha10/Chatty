export interface CompanionListObject {
  id: number;
  name: string;
  sex: string;
}

export type DialogMessageDataType = {
  idMessage: number;
  isCompanionMessage: boolean;
  message: string;
  type?: 'text' | 'file';
  size?: string;
};

export interface MessageListObject {
  id: number;
  lastSeen: string;
  dialog: Array<DialogMessageDataType>;
}
