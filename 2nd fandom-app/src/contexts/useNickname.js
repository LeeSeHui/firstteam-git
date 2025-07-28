import { useContext } from 'react';
import { NicknameContext } from './NicknameContext';

const useNickname = () => {
  const context = useContext(NicknameContext);
  if (!context) throw new Error('useNickname must be used within NicknameProvider');
  return context;
};

export default useNickname;
