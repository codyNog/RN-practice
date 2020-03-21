import React from 'react';
import {Text} from 'react-native';
import {PrimaryButton} from '../../atoms/Button/Primary';
import {SessionStore} from '../../../store/global/Session';
import {postAuthRequest} from '../../../utils/apis/auth/post_request';
import {Template} from '../layouts';

export const Auth: React.FC = () => {
  const {setLoggedIn} = SessionStore.useContainer();

  const submit = async () => {
    await postAuthRequest().catch(() => setLoggedIn(true));
    setLoggedIn(true);
  };

  return (
    <Template scrollable centered>
      <Text>auth</Text>
      <PrimaryButton onPress={submit}>submit</PrimaryButton>
    </Template>
  );
};
