import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../components/templates/Home';
import {SessionStore} from '../store/global/Session';
import {Auth} from '../components/templates/Auth';

const Tab = createBottomTabNavigator();

export const Navigation: React.FC = () => {
  const {isLoggedIn} = SessionStore.useContainer();

  return (
    <>
      {isLoggedIn ? (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name={'Home'} component={Home} />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <Auth />
      )}
    </>
  );
};
