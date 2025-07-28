import React, { createContext, useState } from 'react';

export const NicknameContext = createContext();

export const NicknameProvider = ({ children }) => {
  const [nickname, setNickname] = useState(localStorage.getItem("nickname") || '');

  const updateNickname = (newNickname) => {
    setNickname(newNickname);
    localStorage.setItem("nickname", newNickname);
  };

  return (
    <NicknameContext.Provider value={{ nickname, updateNickname }}>
      {children}
    </NicknameContext.Provider>
  );
};
