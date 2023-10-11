import React from 'react';
import { UserContext } from './LoginContext';

const useUserContext = () => React.useContext(UserContext);

export default useUserContext;