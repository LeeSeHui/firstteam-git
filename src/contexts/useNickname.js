import { useContext } from 'react';
import { NicknameContext } from './NicknameContext.jsx';

const useNickname = () => {
  return useContext(NicknameContext);
};

export default useNickname;
