import {httpClient} from '../../../../libs/httpClient';

export const postAuthRequest = async () => {
  const res = await httpClient.post('/', {});

  return res.json();
};
