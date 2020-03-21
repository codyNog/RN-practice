import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components';
import {Navigation} from './src/navigation';
import {SessionStore} from './src/store/global/Session';

const SafeArea = styled(SafeAreaView)({
  backgroundColor: 'grey',
});

const App: React.FC = () => {
  return (
    <SessionStore.Provider>
      <StatusBar barStyle="dark-content" />
      <SafeArea />
      <Navigation />
    </SessionStore.Provider>
  );
};

export default App;
