import {useState} from 'react';
import {createContainer} from 'unstated-next';

export const useSession = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return {isLoggedIn, setLoggedIn};
};

export const SessionStore = createContainer(useSession);
