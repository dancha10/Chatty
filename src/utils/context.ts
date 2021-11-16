import React from 'react';

export interface ContextBackType {
  setGoBack: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextUserList = React.createContext<ContextBackType | null>(null);
